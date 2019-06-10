import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { getChat, newChat } from '../api/chats.js';
import { updateChatList } from '../api/chatlists.js';

import { Card, CardDeck, Container, Row, Col, CardColumns, Button } from 'react-bootstrap';
import './Chatroom.css';
export default class Chatroom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: [], inputMsg: ''};

    setInterval(() => {
      getChat(this.props.other.roomkey).then(res => {
        this.setState({ data: res });
        var el = document.querySelector('.window');
        el.scrollTop = el.scrollHeight;
      })
    }, 1000);
  }

  componentWillMount() {
    getChat(this.props.other.roomkey).then(res => {
      this.setState({data: res});
    })
  }

  render() {

    let data = this.state.data;
    let other = this.props.other;
    // console.log(data.length)

    var userId = this.props.userData.id;
    var userImg = 'images/' + this.props.userData.photo;
    var username = this.props.userData.name;

    let posts = data.map(d => {
      var reverse, img, name;
      if (d.owner === userId) {
        reverse = 'reverse';
        img = userImg;
        name = username;
      } else {
        reverse = '';
        img = other.img;
        name = other.name;
      }
      return (
        <div key={d.key} className={`talk-box ${reverse}`}>
          <div className="user-img">
            <img src={`${img}`} alt="" />
          </div>
          <div className={`talk-info ${reverse}`}>
            <div className="user-name">{name}</div>
            <div className={`message ${reverse}`}>
              <div className={`user-message ${reverse}`}>{d.text}</div>
              <div className="send-time">{d.updated}</div>
            </div>
          </div>
        </div>
      )
    });

    // console.log(posts);

    return (
      <Container>
        <i className="fas fa-chevron-left back-btn" onClick={this.props.backOnClick}></i>
        <div className="window">{posts}</div>
        <div className="talk-input">
          <input
            type="text"
            placeholder="Message..."
            id="inputMsg"
            onChange={this.handleMsgInput.bind(this)}
            onKeyDown={this.handleKeyDown.bind(this)}
            value={this.state.inputMsg}/>
          <i className="far fa-paper-plane" onClick={this.handleMsgSubmit.bind(this)}></i>
        </div>
      </Container>);
  }

  handleMsgInput(e) {
    var msg = e.target.value;
    this.setState({inputMsg: msg});
  }

  async handleMsgSubmit(e) {
    var userId = this.props.userData.id;
    var text = this.state.inputMsg;
    var updated = this.getTime();
    var roomkey = this.props.other.roomkey;
    var res = await newChat(userId, text, updated, roomkey);
    this.setState({data: res, inputMsg: ''});
    updateChatList(roomkey, text, updated);
  }

  handleKeyDown(e) {
    if (e.key == 'Enter') {
      this.handleMsgSubmit();
    }
  }

  getTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;
    return hour + ':' + min;
  }
}
