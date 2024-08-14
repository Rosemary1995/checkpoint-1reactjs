// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const firstName = "John"; // Provide your name here or leave it blank

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <Card style={{ width: '18rem', margin: 'auto' }}>
        <Card.Body>
          <Image />
          <Card.Title><Name /></Card.Title>
          <Card.Text><Description /></Card.Text>
          <Card.Text><Price /></Card.Text>
        </Card.Body>
      </Card>
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Hello, {firstName ? firstName : 'there'}!</h2>
        {firstName && <img src="https://via.placeholder.com/100" alt="Hello" />}
      </div>
    </div>
  );
}

export default App;

