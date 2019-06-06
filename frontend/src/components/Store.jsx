import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import { Row,Modal, Button} from 'react-bootstrap';
import YouTube from 'react-youtube';
import InputGroup from 'react-bootstrap/InputGroup'
import './PostModal.css';
import Post from 'components/Post.jsx';
import Form from 'react-bootstrap/Form'
export default class Store extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            intro: 10,
        }
        this.getText = this.getText.bind(this);
        this.changeText = this.changeText.bind(this);

    }

    changeText(event){
        //console.log(this.props.cashNumber)
        this.setState({intro: event.target.value})

        //this.porps.cash = this.state.intro;
    }
    getText(){
        alert(this.state.intro)
    }

    render(){

        const opts = {
            width: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 0
            }
        };

        return(

           <Modal
            {...this.props}
           >
           <Modal.Header>
             <Modal.Title id="contained-modal-title-vcenter">
               iTalent 儲值
             </Modal.Title>
           </Modal.Header>
           <Modal.Body>
           <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>卡號</Form.Label>
              <Form.Control  placeholder="請輸入卡號" />

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>密碼</Form.Label>
              <Form.Control type="password" placeholder="請輸入密碼" />
            </Form.Group>
            <input type='number'  onChange={this.changeText}/>
            <input type="button" value="金額" onClick={this.getText}/>

            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="我不是機器人" />
            </Form.Group>
            <Button onClick={() => {this.props.triggerchangemoney(this.state.intro)}}  variant="primary" >
              Submit
            </Button>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
          </Modal>

        );
    }
}
