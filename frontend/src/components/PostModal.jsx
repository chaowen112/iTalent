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
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <YouTube
                videoId="ERFO-yoFBVA"
                opts={opts}
                onReady={this._onReady}
            />
            <Post/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
    }
}
