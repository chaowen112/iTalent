import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import {Col, Row, Image} from 'react-bootstrap';

import YouTube from 'react-youtube';

export default class Post extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        const opts = {
            height: '360',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 0
            }
        };

        <YouTube
                        videoId="2g811Eo7K8U"
                        opts={opts}
                        onReady={this._onReady}
                    />

        return(
            <Col>
                <Row>
                    <h1>Post</h1>
                </Row>
                <Row>
                    <Image style={{width:'30%', height: '100%', display: 'inline'}} src={`images/React-icon.png`}/>
                    <p><span>Title: </span></p>
                    <p><span>Introduction</span></p>
                </Row>
            </Col>
        )
    }
}