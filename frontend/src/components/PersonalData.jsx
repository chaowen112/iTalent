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
            photo: null,
            ready_upload: false
        }
        this.uploadDescription = this.uploadDescription.bind(this);
        this.uploadPhoto = this.uploadPhoto.bind(this);
    }

    render(){
        var img = 'images/' + this.props.userData.photo;
        let description = null;
        if(this.state.description)
            description = this.state.description.split('\n').map(
            (d, it) =>{return(<p key={it}>{d}</p>)
        })
        console.log(description)

        return (
            <div >

                <div className="person-card">
                    <img src={img} alt="photo" onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://source.unsplash.com/500x500/?sing,dance"
                    }} />
                    <Button 
                        style={{borderColor: "#fff", color: "#fff", margin: "1rem auto 0.5rem auto"}} variant="outline-info" onClick={this.uploadPhoto}>
                        上傳頭像
                        <FormControl as="input" type="file"
                            onChange={(e)=>this.setState({photo: e.target.files[0]})}
                        />
                    </Button>
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
                    <div className="split-line"></div>
                    <div className="info-title">
                            About
                    </div>
                        <div className="border"></div>
                        <p className="lead">{description}</p>
                </div>  

                <Card style={{width:'100%'}}>
                {/* <div >
                <Card.Img  className="imgsize"  src={`images/${this.props.userData.photo}`}/>
                </div> */}
                <Card.Body>
                    <Card.Title >
                        <p className="card_title">更新資料</p>
                        <br></br>
                        <InputGroup style={{height: '5rem'}}>
                            <FormControl as="textarea" value={this.state.description} style={{height: '5rem'}}
                                onChange={(e)=>{
                                    this.setState({
                                        description: e.target.value
                                    });
                                }}
                            />
                        </InputGroup>
                        <br></br>
                        <div className="d-flex flex-row">
                            <InputGroup>
                                
                            </InputGroup>
                            <Button className="align-self-start" onClick={this.uploadDescription}>
                                上傳簡介
                            </Button>                                    
                        </div>
                    </Card.Title>
                </Card.Body>
                </Card>
            </div>
        )
    }

    uploadDescription(){
        post('api/user/description', {
            id: this.props.userData.id,
            text: this.state.description
        })
        .then(console.log(r))
        .catch(console.log(e));

    }

    uploadPhoto(){
        console.log(this.state.photo);
        if (!this.state.ready_upload) {
            $('input.form-control-file').click();
        } else {
            var formData = new FormData();
            formData.append("photo", this.state.photo);
            formData.append("id", this.props.userData.id);
            post('/api/user/photo', formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
            })
            .then(r => {
                console.log(r);
                $('.photo-upload-btn').text('上傳頭像');
                $('.person-card img').attr("src", "images/" + this.state.photo.name);
                this.setState({ready_upload: false});
            })
            .catch(e => console.log(e))            
        }
    }
}
