import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import {Card, CardDeck , Container, Row, Col, CardColumns}from 'react-bootstrap';
import './Recommend.css';
export default class Recommend extends React.Component{

    constructor(props){
        super(props)
    }

    render(){

        let data = [
            {
                key: 0,
                title: 'Andrew',
                text: 'I can play guitar',
                img: `images/React-icon.png`,
                updated: '2019/05/18'
            }
        ]


        let cards = data.map(d => {
            return (
            <Card key={d.key}>
                <Card.Img variant="top" src={d.img}/>
                <Card.Body>
                    <Card.Title>{d.title}</Card.Title>
                    <Card.Text>{d.text}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated on {d.updated}</small>
                </Card.Footer>
            </Card>)
        });



        return(
        <div>
            <h1 className="title">{this.props.title}</h1>
            <Row className='justify-content-md-center'>
                <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
                    {cards}
                </CardDeck>
            </Row>
        </div>);
    }
}
