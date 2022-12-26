import React from 'react'
import UserImg from '../img/user-image.jpg';
import {FaTrashAlt} from 'react-icons/fa';

const Home = ({users,handleRemove}) => {
  return (
    <section id="home">
      <div className="container">
        <div className="row">
          {
            users.length > 3 ? (
              users.map((user) => (
                <div className="card" key={user.id}>
                  <div className="trash-fa">
                    <FaTrashAlt onClick={() => handleRemove(user.id) }/>
                  </div>
                  <div className="card-img">
                    <img src={UserImg} alt=""/>
                  </div>
                <div className="card-details">
                  <h4>{user.name}</h4>
                  <p><strong>{user.email}</strong></p>
                  <p>{user.address.city}</p>
                </div>
              </div>
              ))
            ) : (
              users.map((user) => (
                <div className="card" key={user.id}>
                  <div className="card-img">
                    <img src={UserImg} alt=""/>
                  </div>
                <div className="card-details">
                  <h4>{user.name}</h4>
                  <p><strong>{user.email}</strong></p>
                  <p>{user.address.city}</p>
                </div>
              </div>
              ))
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Home