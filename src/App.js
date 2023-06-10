import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [listOfUsers, setListOfUsers] = useState ([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);
  
  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name: "",
      age: 0,
      username: "",
    }).then((response) => {
      alert("USER CREATED");
    });
  };
 
  return (
    <div className="App">
       
    </div>
  );
}

export default App;
