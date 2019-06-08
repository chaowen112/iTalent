import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import {Card, CardDeck , Container, Row, Col, CardColumns, Button, Img, InputGroup, FormControl}from 'react-bootstrap';
import './PersonalData.css';
import {get, post} from '../api/post.js';
export default class PersonalData extends React.Component{

    constructor(props){
        super(props)
        this.state={
            description: this.props.userData.description,
            photo: null
        }
        this.uploadDescription = this.uploadDescription.bind(this);
        this.uploadPhoto = this.uploadPhoto.bind(this);
    }

    render(){
      var img = this.props.userData.photo || 'images/guitar.jpg';

        return (
            <div >
            <Card style={{width:'100%'}}>
            <div >
            <Card.Img  className="imgsize"  src={`images/${this.props.userData.photo}`}/>
            </div>
            <Card.Body>
                <Card.Title ><p className="card_title">姓名：{this.props.userData.name}</p>
                            <br></br>
                            <p className="card_title">簡介：{this.props.userData.description}</p>
                            <InputGroup style={{height: '5rem'}}>
                                <FormControl as="textarea" value={this.state.description}
                                    onChange={(e)=>this.setState({description: e.target.value})}
                                />
                            </InputGroup>
                            <br></br>
                            <InputGroup style={{height: '5rem'}}>
                                <FormControl as="input" type="file"
                                    onChange={(e)=>this.setState({photo: e.target.files[0]})}
                                />
                            </InputGroup>
                            <p className="card_title">
                                <Button onClick={this.uploadDescription}>上傳簡介</Button>
                                <Button onClick={this.uploadPhoto}>上傳頭像</Button>
                            </p>
                </Card.Title>
            </Card.Body>
            </Card>
            </div>
        )
    }

    uploadDescription(){

    }

    uploadPhoto(){
        console.log(this.state.photo);
        var formData = new FormData();
        formData.append("photo", this.state.photo);
        formData.append("id", this.props.userData.id);
        post('/api/user/photo', formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        })
        .then(r => console.log(r))
        .catch(e => console.log(e))
    }
}
