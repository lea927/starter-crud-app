import AddUser from "./AddUser";
import "./App.css";
import Users from "./Users";
import React, { useState } from "react";
import ToggleBtn from "./ToggleBtn";

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
  id: "",
  firstName: "",
  lastName: "",
  totalGames: 0,
  userName: "",
 });

 const [isAnyFieldEmpty, setIsAnyFieldEmpty] = useState(true);
 const [totalGames, setTotalGames] = useState(0);
 const [buttonTxt, setButtonTxt] = useState("Show the number of games played");
 const [showGamesPlayed, setShowGamesPlayed] = useState(true);

 const handleUserChange = (event) => {
  setUser({ ...user, [event.target.name]: event.target.value });
  enableFields({ ...user, [event.target.name]: event.target.value });
 };

 const fetchUserByUsername = (userName) => {
  const fetchedUser = users.find((u) => {
   if (u.userName === userName) {
    return u;
   }
  });
  return fetchedUser;
 };

 const userDontExist = ({ userName }) => {
  return !fetchUserByUsername(userName);
 };

 const enableFields = ({ id, firstName, lastName, userName }) => {
  setIsAnyFieldEmpty(
   id === "" || firstName === "" || lastName === "" || userName === ""
  );
 };

 const addUser = () => {
  if (userDontExist(user)) {
   setUsers([...users, user]);
  } else {
   alert("Username already exists!");
  }
 };

 const handleShowingGamesPlayed = () => {
  setShowGamesPlayed(showGamesPlayed === true ? false : true);
  if (showGamesPlayed) {
   setButtonTxt("Hide the number of games played");
  } else {
   setButtonTxt("Show the number of games played");
  }
 };

 return (
  <>
   <Users users={users} />
   <AddUser
    user={user}
    handleUserChange={handleUserChange}
    addUser={addUser}
    isAnyFieldEmpty={isAnyFieldEmpty}
   />
   <ToggleBtn
    buttonTxt={buttonTxt}
    handleShowingGamesPlayed={handleShowingGamesPlayed}
   />
  </>
 );
}

export default App;
