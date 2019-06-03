import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { Card, CardDeck, Container, Row, Col, CardColumns, Button } from 'react-bootstrap';
import './Chatroom.css';
export default class Chatroom extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let data = [
      {
        key: 0,
        name: 'Andrew',
        text: 'I can play guitar',
        img: `images/guitar.jpg`,
        updated: '2019/05/18',
      },
      {
        key: 1,
        name: 'Jim',
        text: 'Nice to meet you!',
        img: `images/ballet.jpg`,
        updated: '2019/05/13',
      },
      {
        key: 2,
        name: 'Alex',
        text: 'hello, i am Lee.',
        img: `images/piano.jpg`,
        updated: '2019/05/10',
      },
    ]
    console.log(data.length)

    var UserName = 'Alex';

    let posts = data.map(d => {
      let reverse = d.name === UserName ? 'reverse' : '';
      return (
        <div className={`talk-box ${reverse}`}>
          <div className="user-img">
            <img src={`./img/${d.img}`} alt="" />
          </div>
          <div className={`talk-info ${reverse}`}>
            <div className="user-name">{d.name}</div>
            <div className={`message ${reverse}`}>
              <div className={`user-message ${reverse}`}>{d.text}</div>
              <div className="send-time">{d.updated}</div>
            </div>
          </div>
        </div>
      )
    });

    console.log(cards);

    var component = cards;
    if (this.state.isChat) {
      component = null;
    }
    return (
      <Container>
        {component}
      </Container>);
  }
}
