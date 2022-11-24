function Users({ users, showGamesPlayed }) {
 return (
  <div>
   <ul>
    {users.map((user) => {
     return (
      <li key={user.id}>
       <p>{`${user.userName}'s total games played: ${showGamesPlayed ? user.totalGames : 0}`}</p>
      </li>
     );
    })}
   </ul>
  </div>
 );
}

export default Users;
