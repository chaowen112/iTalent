import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import {getChatList} from '../api/chatlists.js';

import Chatroom from './Chatroom.jsx';

import { Card, CardDeck, Container, Row, Col, CardColumns, Button } from 'react-bootstrap';
import './Emails.css';
export default class Emails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isChat: false, 
      data: [], 
      other: {},
      interval: null
    };
  }

  componentWillMount() {
    let userId = this.props.userData.id;
    getChatList(userId).then(res => {
      this.setState({data: res});
    })
  }

  componentDidMount(){
    this.setState({interval: setInterval(() => {
      let userId = this.props.userData.id;
      getChatList(userId).then(res => {
        this.setState({ data: res });
      })
    }, 1000)});
  }

  componentWillUnmount(){
    clearInterval(this.state.interval);
  }

  render() {

    let data = this.state.data;

    // console.log(data.length)

    let cards = data.map(d => {
      return (
        <div key={d.key} className="chat-box" onClick={this.startChat.bind(this, d)}>
          <div className="user-photo">
            <img style={{width:'10vh',height:'10vh',borderRadius:'50%',marginLeft:'22px',marginTop:'10px',border:'solid 5px #eee'}} src={d.img}/>
          </div>
          <div className="user-info">
            <div className="user-name">{d.name}</div>
            <div className="text">{d.text}</div>
            <div className="date">{d.updated}</div>
          </div>
        </div>
      )
    });

    // console.log(cards);

    var component = cards;
    if (this.state.isChat) {
      component = <Chatroom
                    userData={this.props.userData}
                    other={this.state.other}
                    backOnClick={this.closeChatroom.bind(this)}
                  ></Chatroom>;
    }
    return (
      <Container style={{display: 'flex', flexDirection: 'column-reverse'}}>
        {component}
      </Container>);
  }

  startChat(other) {
    this.setState({isChat: true, other});
  }

  closeChatroom() {
    this.setState({isChat: false});
  }

}
