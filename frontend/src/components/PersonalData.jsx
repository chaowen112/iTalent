import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import {Card, CardDeck , Container, Row, Col, CardColumns, Button, Img}from 'react-bootstrap';
import './PersonalData.css';
export default class PersonalData extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.userData.photo)

      return (
        <div >
        <Card style={{width:'100%'}}>
        <div >
        <Card.Img  className="imgsize"  src={this.props.userData.photo}/>
        </div>
        <Card.Body>
            <Card.Title ><p className="card_title">姓名：{this.props.userData.name}</p>
                         <br></br>
                         <p className="card_title">簡介：{this.props.userData.description}</p>
                         <br></br>
                         <p className="card_title"><Button>編輯簡介</Button><Button>上傳頭像</Button></p>
            </Card.Title>
        </Card.Body>
        </Card>
        </div>
      )



    }
}
