import './App.css';
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

//react bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import main_image from './image/bg.png';

import data from './data.js';

import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail';
import axios from 'axios'

function App() {

  let [shoes, setShoes]=useState(data)
  let navigate=useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Shoes_Shop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={
        <>
          <div className='mainImage' style={{backgroundImage : 'url('+main_image+')'}}></div>
          <div className='container'>
            <div className='row'>
              {
                shoes.map((a,i)=>{
                  return(
                    <Card shoes_data={shoes[i]} n={i+1} key={i}></Card>
                  )
                })
              }
            </div>
          </div>
          <button onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{
              console.log(result.data)
              let copy = [...shoes, ...result.data];
              setShoes(copy);
            })
          }}>더보기</button>
        </>}/>
        <Route path='/detail/:id' element={<Detail shoes_data={shoes}/>}/>
        
        
        {/* nested routes /about/member,/about/location
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>dkdkd</div>}/>
          <Route path='location' element={<About/>}/>
        </Route> */}
      
      
      </Routes>
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

// function About(){
//   return(
//     <div>
//       <h4>회사정보임</h4>
//       <Outlet></Outlet>
//     </div>
//   )
// }

export default App;
