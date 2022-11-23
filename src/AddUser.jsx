function AddUser({ user, handleUserChange, addUser }) {
 return (
  <div>
   <div>
    <label htmlFor='id'>Id: </label>
    <input
     type='text'
     name='id'
     id='id'
     value={user.id}
     onChange={handleUserChange}
    />
   </div>
   <div>
    <label htmlFor='firstName'>First name: </label>
    <input
     type='text'
     name='firstName'
     id='firstName'
     value={user.firstName}
     onChange={handleUserChange}
    />
   </div>
   <div>
    <label htmlFor='lastName'>Last name: </label>
    <input
     type='text'
     name='lastName'
     id='lastName'
     value={user.lastName}
     onChange={handleUserChange}
    />
   </div>
   <div>
    <label htmlFor='userName'>User name: </label>
    <input
     type='text'
     name='userName'
     id='userName'
     value={user.userName}
     onChange={handleUserChange}
    />
   </div>
   <button onClick={addUser}>Add User</button>
  </div>
 );
}

export default AddUser;
