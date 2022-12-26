import React from 'react'

const AddUsers = ({
  userName,
  setUserName,
  userEmail,
  setUserEmail,
  userCity,
  setUserCity,
  handleSubmit
}) => {
  return (
    <section id="addUsers">
      <div className='container'>
        <div className="formSec">
          <form onSubmit={handleSubmit}>
            <div className='inputs'>
                <input 
                  type="text" 
                  placeholder="Name" 
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  required
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <input 
                  type="text" 
                  placeholder="City"
                  required
                  value={userCity}
                  onChange={(e) => setUserCity(e.target.value)}
                />
            </div> 
            <div className='input-btn'>
                <button type='submit'>Submit</button>
            </div>
          </form> 
        </div>
      </div>
    </section>
  )
}

export default AddUsers