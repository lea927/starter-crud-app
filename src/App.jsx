import AddUser from "./AddUser";
import "./App.css";
import Users from "./Users";
import React, { useState } from "react";

function App() {
 const [users, setUsers] = useState([
  {
   id: 1,
   firstName: "sushi",
   lastName: "tokyo",
   totalGames: 0,
   userName: "sushi1",
  },
  {
   id: 2,
   firstName: "maki",
   lastName: "osaka",
   totalGames: 0,
   userName: "maki2",
  },
  {
   id: 3,
   firstName: "udon",
   lastName: "gyudon",
   totalGames: 0,
   userName: "udon3",
  },
 ]);

 const [user, setUser] = useState({
  id: 0,
  firstName: "",
  lastName: "",
  totalGames: 0,
  userName: "",
 });
 const handleUserChange = (event) => {
  setUser({ ...user, [event.target.name]: event.target.value });
 };

 const addUser = () => {
  setUsers([...users, user]);
 };

 return (
  <>
   <Users users={users} />
   <AddUser user={user} handleUserChange={handleUserChange} addUser={addUser} />
  </>
 );
}

export default App;
