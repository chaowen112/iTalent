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
        var img = 'images/' + this.props.userData.photo;

        return (
            <div >

                <div className="person-card">
                    <img src={img} alt="photo" onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://source.unsplash.com/500x500/?sing,dance"
                    }} />
                    <Button style={{borderColor: "#fff", color: "#fff", margin: "1rem auto 0.5rem auto"}} variant="outline-info" onClick={this.uploadPhoto}>上傳頭像</Button>
                    <div className="username">{this.props.userData.name}</div>
                </div>
                <div className="info">
                    <div>
                        <div className="info-title">
                            Email
                    </div>
                        <div className="border"></div>
                        <i className="far fa-envelope"></i>{this.props.userData.email}
                    </div>
                    <div className="split-line"></div>
                    <div>
                        <div className="info-title">
                            Phone
                    </div>
                        <div className="border"></div>
                        <i className="fas fa-phone"></i>{this.props.userData.phone}
                    </div>
                </div>  

                <Card style={{width:'100%'}}>
                {/* <div >
                <Card.Img  className="imgsize"  src={`images/${this.props.userData.photo}`}/>
                </div> */}
                <Card.Body>
                    <Card.Title >
                                {/* <p className="card_title">姓名：{this.props.userData.name}</p> */}
                                {/* <br></br> */}
                                <p className="card_title">簡介：{this.props.userData.description}</p>
                                <InputGroup style={{height: '5rem'}}>
                                    <FormControl as="textarea" value={this.state.description}
                                        onChange={(e)=>this.setState({description: e.target.value})}
                                    />
                                </InputGroup>
                                <br></br>
                                <div className="d-flex flex-row">
                                    <InputGroup>
                                        <FormControl as="input" type="file"
                                            onChange={(e)=>this.setState({photo: e.target.files[0]})}
                                        />
                                    </InputGroup>
                                    <Button className="align-self-start" onClick={this.uploadDescription}>上傳簡介</Button>                                    
                                </div>

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
