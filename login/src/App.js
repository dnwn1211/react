import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function App() {
  return (
    
    <div className="App">
      <Container>
        <Navbar expand="lg" className="bg-body">
          <Container>
            <Navbar.Brand className='main-font' href="#">🤖StoryAI</Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
      <div className='login-box'>
        <Card style={{ width: '18rem' }} className='login-card'>
          <Card.Body>
            <Card.Title className='login'>login</Card.Title>
            <div className='input-box'>
              <input type='id' className='input' placeholder="Enter username..."></input>
            </div>
            <div className='input-box'>
              <input type='password' className='input' placeholder="Enter password..."></input>
            </div>
            <div className='check-box'>
              <input type='checkbox'/>
              <label>Remember me</label>
            </div>
            <div className='input-box'>
            <Button variant="outline-warning">login</Button>{' '}
            <Button variant="outline-warning">가입하기</Button>{' '}
            <Button variant="outline-warning">찾기</Button>{' '}
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className='button-group'>
      <Button type='button' variant="outline-primary">
        <img src={process.env.PUBLIC_URL+'/img/facebook.png'} width='30px'/>
      </Button>{'  '}
      <Button variant="outline-warning">
      <img src={process.env.PUBLIC_URL+'/img/google.png'} width='30px'/>  
      </Button>{'  '}
      <Button variant="outline-dark">
      <img src={process.env.PUBLIC_URL+'/img/apple.png'} width='30px'/> 
      </Button>
      </div>
    </div>
  );
}

export default App;
