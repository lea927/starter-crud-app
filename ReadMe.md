<br />
<div align="center">
  <!-- <a href="https://github.com/lea927/starter-crud-app">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">Simple CRUD App</h3>

  <p align="center">
    Created a basic ReactJS App using Vite.
    <br />
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

### Built With

* ![React][React.js]
* [Vite](https://vitejs.dev/)

<!-- GETTING STARTED -->
## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/lea927/starter-crud-app.git
   ```
2. Install dependencies
   ```sh
   yarn
   ```
3. Start server
   ```sh
   yarn dev
   ```

### Requirements:
- Add a user's first name, last name, and username.
- When the user is added, the number of games that he/she has played defaults to 0.
- Each username has to be unique, so we cannot add multiple users with the same username.
- When someone clicks "Add" but the username already exists, the app should not allow for a duplicate user to be added and should show an error message instead.
- The app should also display a list of users, specifically their usernames and the number of games they've played (which is defaulted to 0).
- If someone tries to add a user when one of the fields is empty, the "Add" button should be disabled.
- We should also have a button that lets us toggle between showing and hiding the number of games the users have played. For example, the button can start out as "Hide the Number of Games Played" and the app can display "username1 played 0 games." Clicking that button should change the button text to "Show the Number of Games Played" and the displayed username and score can be changed to "username1 played * games."


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
