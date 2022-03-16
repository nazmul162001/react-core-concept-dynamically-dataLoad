import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>

    </div>
  );
}

function ExternalUsers () {
  const [users, setUsers] = useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  } , [])


  return (
    <div>
      <h2 className='data-title'>External Users</h2>
      <br />
      <p className='total-data'>Total Data: {users.length}</p>
      {
        users.map( user => <User name = {user.name} email = {user.email} website = {user.website}></User>)
      }
    </div>
  )
}

function User(props){
  return (
    <div className='user-info'>
      <h3>Name: {props.name}</h3>
      <h3>Email: {props.email}</h3>
      <h3>Website: {props.website}</h3>
    </div>
  )
}





function Counter(){
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}



export default App;
