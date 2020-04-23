import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Spinner } from 'reactstrap';
import Material from './Material'
import Card from './Card'


var moment = require('moment');


const collections = [
  {title: "A", author:"Nguyen A"},
  {title :"B", author :"Nguyen B"},
  {title :"C", author :"Nguyen C"},
]

function App() {

  const str = moment.duration(1, "minutes").humanize(true);
  return (
    <div className="App">
      <ul>
        {collections.map( collection =>{
          return (
          <li>{collection.title} - {collection.author}</li>
          )
        })}
      </ul>
      <Material />
      <Card />
      <div>
      <Button color="primary">primary</Button>{' '}
      <Button color="secondary">secondary</Button>{' '}
      <Button color="success">success</Button>{' '}
      <Button color="info">info</Button>{' '}
      <Button color="warning">warning</Button>{' '}
      <Button color="danger">danger</Button>{' '}
      <Button color="link">link</Button>

    </div>
    </div>
  );
}

export default App;
