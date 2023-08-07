import './App.css';
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

//react bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import main_image from './image/bg.png';

import data from './data.js';

function App() {

  let [shoes]=useState(data)

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='mainImage' style={{backgroundImage : 'url('+main_image+')'}}></div>
      <div className='container'>
        <div className='row'>
          {
            shoes.map((a,i)=>{
              return(
                <Card shoes_data={shoes[i]} n={i+1}></Card>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

function Card(props){
  return(
    <div className='col-md-4'>
      <img src={'https://codingapple1.github.io/shop/shoes'+props.n+'.jpg'} width='80%'/>
      <h4>{props.shoes_data.title}</h4>
      <p>{props.shoes_data.price}</p>
    </div>
  )
}

export default App;
