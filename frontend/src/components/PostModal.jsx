import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import {Modal, Button} from 'react-bootstrap';
import YouTube from 'react-youtube';

import './PostModal.css';
import Post from 'components/Post.jsx';
import Availability from './Availability.jsx';

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
                Title
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <YouTube
                videoId="GsrIZ1mnOvU"
                opts={opts}
                onReady={this._onReady}
            />
            <Post/>
            <Availability artistId={this.props.artistId} userId={this.props.userId}/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
    }
}
