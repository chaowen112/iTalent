import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { Card, CardDeck, Container, Row, Col, CardColumns, Button } from 'react-bootstrap';
import './Emails.css';
export default class Emails extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    let data = [
      {
        key: 0,
        name: 'Andrew',
        text: 'I can play guitar',
        img: `images/React-icon.png`,
        updated: '2019/05/18',
      },
      {
        key: 1,
        name: 'Jim',
        text: 'Nice to meet you!',
        img: `images/React-icon.png`,
        updated: '2019/05/13',
      },
      {
        key: 2,
        name: 'Alex',
        text: 'hello, i am Lee.',
        img: `images/React-icon.png`,
        updated: '2019/05/10',
      },
    ]
    console.log(data.length)

    let cards = data.map(d => {
      return (
        <div key={d.key} className="chat-box" onClick={this.startChat}>
          <div className="user-photo">
            <img src={d.img}/>
          </div>
          <div className="user-info">
            <div className="user-name">{d.name}</div>
            <div className="text">{d.text}</div>
            <div className="date">{d.updated}</div>
          </div>
        </div>
      )
    });

    console.log(cards)

    return (
      <Container>
        {cards}
      </Container>);
  }

  startChat() {
    console.log('chat')
  }

}
