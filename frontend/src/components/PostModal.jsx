import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import {Modal, Button, Col, Row} from 'react-bootstrap';
import YouTube from 'react-youtube';

import './PostModal.css';
import Post from 'components/Post.jsx';
import Availability from './Availability.jsx';

import {get, post} from '../api/post.js';

export default class PostModal extends React.Component{
    constructor(props){
        super(props);
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
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                Title: {this.props.postData.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <YouTube
                videoId={this.props.postData.youtubeid}
                opts={opts}
                onReady={this._onReady}
            />            
            <Col>
              <Row onClick={this.openModal}>
                  <p><span>Title: {this.props.postData.title} </span></p>
                  <p><span>Introduction: {this.props.postData.detail}</span></p>
              </Row>
            </Col>
            <Availability userId={this.props.userId} postData={this.props.postData}/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
    }
}
