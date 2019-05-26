import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import {Col, Row, Image} from 'react-bootstrap';

import PostModal from 'components/PostModal.jsx';

export default class Post extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isModalShow: false
        }
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    render(){

        const opts = {
            height: '360',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 0
            }
        };

        return(
            <Col>
                <Row>
                    <h1>Post</h1>
                </Row>
                <Row onClick={this.openModal}>
                    <Image style={{width:'30%', height: '100%', display: 'inline'}} src={`images/guitar.jpg`}/>
                    <p><span>Title: </span></p>
                    <p><span>Introduction</span></p>
                    <PostModal onHide={this.closeModal} show={this.state.isModalShow}/>
                </Row>
            </Col>
        )
    }

    openModal(){
        this.setState({isModalShow: true});
        console.log('openModal', this.state.isModalShow)
    }

    closeModal(e){
        console.log(e)
        e.stopPropagation();
        this.setState({isModalShow: false})
        console.log('closeModal', this.state.isModalShow)
    }
}
