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
            },
            {
                key: 1,
                title: 'Lawson',
                text: 'I can tell stories',
                img: `images/React-icon.png`,
                updated: '2019/05/10'
            },
            {
                key: 2,
                title: 'Andy',
                text: 'I can concour the universe',
                img: `images/React-icon.png`,
                updated: '2019/05/19'
            },
            {
                key: 3,
                title: 'Andy',
                text: 'I can concour the universe',
                img: `images/React-icon.png`,
                updated: '2019/05/19'
            },
            {
                key: 5,
                title: 'Andy',
                text: 'I can concour the universe',
                img: `images/React-icon.png`,
                updated: '2019/05/19'
            },
            {
                key: 6,
                title: 'Andy',
                text: 'I can concour the universe',
                img: `images/React-icon.png`,
                updated: '2019/05/19'
            }
        ]
        console.log(data.length)

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

        console.log(cards)

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