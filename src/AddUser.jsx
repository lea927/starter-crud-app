function AddUser() {
 return (
  <div>
   <div>
    <label htmlFor="firstName">First name: </label>
    <input type='text' id="firstName" />
   </div>
   <div>
    <label htmlFor="lastName">Last name: </label>
    <input type='text' id="lastName" />
   </div>
   <div>
    <label htmlFor="userName">User name: </label>
    <input type='text' id="userName" />
   </div>
   <button>Add User</button>
  </div>
 );
}

export default AddUser;
