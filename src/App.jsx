import AddUser from './AddUser'
import './App.css'
import Users from './Users'

function App() {
  const usersList = [
    {id: 1, firstName: 'sushi', lastName: 'tokyo', totalGames: 0, userName: 'sushi1' },
    {id: 2, firstName: 'maki', lastName: 'osaka', totalGames: 0, userName: 'maki2' },
    {id: 3, firstName: 'udon', lastName: 'gyudon', totalGames: 0, userName: 'udon3' },
  ]

  return (
    <>
      <Users usersList={usersList}/>
      <AddUser/>
    </>
    )
}

export default App
