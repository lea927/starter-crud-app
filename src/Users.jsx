function Users({ users }) {
 return (
  <div>
   <ul>
    {users.map((user) => {
     return (
      <li key={user.id}>
       <p>{`${user.userName}'s total games played: ${user.totalGames}`}</p>
      </li>
     );
    })}
   </ul>
  </div>
 );
}

export default Users;
