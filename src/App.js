import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks=['Rajjak','Salman','Alomgir','Bappi']
const products =[
  {name : 'photoshop' , price : '$56' },
  {name : 'illustrator' , price : '$56' },
  {name : 'Reader' , price : '$56' },
  {name : 'Photo' , price : '$56' }
]


  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
        <Counter></Counter>
        <ul>
         {
           nayoks.map(nayok => <li>{nayok}</li>  )
         }
         {
           products.map(product => <li>{product.name}</li>)
         }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        <Product product = {products[0]} ></Product>
        <Product product = {products[0]} ></Product>
      </header>
    </div>
  );
}

function Counter() {
  const[count,setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>count:{count} </h1>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
      <button onClick  = {() => setCount(count + 1)}>increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]); 
  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return (
    <div>
      <h3>Dynamic User:{users.length}</h3>
      <ul>
      {
        console.log(users)
      }
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
  
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name,price} = props.product
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
