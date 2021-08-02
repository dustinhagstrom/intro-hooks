import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [singleUser, setSingleUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function fetchSingleUser(number) {
    setIsLoading(true); //button was clicked => isLoading
    try {
      let result = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${number}`
      );
      console.log(result); //axios user object
      setIsLoading(false); //no longer loading
      setSingleUser(result.data); //all user info
    } catch (e) {
      setIsLoading(false); //no longer loading
      console.log(e);
    }
  }

  useEffect(() => {
    fetchAllUsers();
  }, []);

  async function fetchAllUsers() {
    try {
      let result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="App">
      <p>SingleUser</p>
      <input type="text" onChange={(e) => setSingleUser(e.target.value)} />
      <button onClick={() => fetchSingleUser(singleUser)}>Search User</button>
      {isLoading ? (
        <div>...loading</div>
      ) : (
        <div>user full name: {singleUser.name}</div>
      )}
      <hr />
      <p>Users</p>
      <ul>
        {user.map((user) => {
          return <li key={user.id}></li>;
        })}
      </ul>
    </div>
  );
}

export default App;
