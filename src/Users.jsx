function Users({ usersList }) {
 return (
  <div>
   <ul>
    {usersList.map((user) => {
     return (
      <li key={user.id}>
       <p>{`${user.userName} 's total games played: ${user.totalGames}`}</p>
      </li>
     );
    })}
   </ul>
  </div>
 );
}

export default Users;
