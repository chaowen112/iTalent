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
            isModalShow: false,
            artistId: ''
        }
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    render(){
        console.log('rendered')

        const opts = {
            height: '360',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 0
            }
        };

        return(
            <Col>
                <Row onClick={this.openModal}>
                    <Image style={{width:'30%', height: '100%', display: 'inline', borderRadius: "10px", border: "3px solid #eee", marginRight: "0.5rem"}} src={`images/guitar.jpg`}/>
                    <p><span>Title: </span></p>
                    <p><span>Introduction</span></p>
                    <PostModal onHide={this.closeModal} show={this.state.isModalShow} artistId={this.state.artistId} userId={this.props.userId}/>
                </Row>
            </Col>
        )
    }

    openModal(){
        this.setState({isModalShow: true});
    }

    closeModal(e){
        console.log(e)
        if(e)
            e.stopPropagation();
        this.setState({isModalShow: false})
    }
}
