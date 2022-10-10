
import './App.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';

function User() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setusername] = useState("");


useEffect(() => {
  Axios.get('http://localhost:3001/api/getusers/').then((response)=>{
    setListOfUsers(response.data)
  })
}, [])

const createUser = ()=>{
  Axios.post('http://localhost:3001/api/createuser/',{
    name,
    age,
    username
  }).then((response)=>{
    alert('Your blog has been created, go to the All blogs section to view it')
    setListOfUsers([...listOfUsers,{name,age,username}])
  })
}

  return (
    
    <div className="App">
      <header className="App-header">
        {listOfUsers.map((user)=>{
          return(
            
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          )
        })
        }
      </header>
      <div>
              <input type="text" onChange={(event)=>{setName(event.target.value)}} placeholder="Name..."/>
              <input type="number" onChange={(event)=>{setAge(event.target.value)}} placeholder="Age..."/>
              <input type="text" onChange={(event)=>{setusername(event.target.value)}} placeholder="Username..."/>
              <button onClick={createUser}> Create User</button>          
            </div>
    </div>
  );
}

export default User;
