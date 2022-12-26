import React, {useState,useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import AddUsers from './components/AddUsers';
import apiRequest from './apiRequest';

function App() {

  const API_URL = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userCity, setUserCity] = useState('');

  useEffect(() => {
    const fetchUsers = async() => {
      try{
        const response = await fetch(API_URL);
        if(!response.ok) throw Error ('Did not receive expected data');
        const listUsers = await response.json();
        setUsers(listUsers);
        setFetchError(null)
      }catch(err){
        setFetchError(err.message);
      }
    }

    fetchUsers();
  },[])

  const handleSubmit = async(e) => {
    e.preventDefault();
    const id = users.length ? users[users.length - 1].id + 1 : 1;
    const newUser = {id, name: userName, email: userEmail, address:{city: userCity}};
    const listUsers = [...users, newUser];
    setUsers(listUsers);
    setUserName('');
    setUserEmail('');
    setUserCity('');
    
    const userOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    }
    const result = await apiRequest(API_URL, userOption);
    if(result) setFetchError(result);
  }

  const handleRemove = async(id) => {
    const listUsers = users.filter((user) => user.id !== id);
    setUsers(listUsers);

    const deleteOption = {method: "DELETE"};
    const reqURL = `${API_URL}/${id}`;
    const result = await apiRequest(reqURL, deleteOption);
    if(result) setFetchError(result);
  }

  return (
    <>
      <Header/>
      <AddUsers
        userName={userName}
        setUserName={setUserName}
        userEmail={userEmail}
        setUserEmail={setUserEmail}
        userCity={userCity}
        setUserCity={setUserCity}
        handleSubmit={handleSubmit}
      />
      <Routes>
        <Route path="/" element={<Home 
          users={users} 
          handleRemove={handleRemove}
        />}/>
      </Routes>
    </>
  );
}

export default App;
