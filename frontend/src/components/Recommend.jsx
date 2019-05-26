import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import {Card, CardDeck , Container, Row, Col, CardColumns, Button}from 'react-bootstrap';
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
                img: `images/guitar.jpg`,
                updated: '2019/05/18'
            },
            {
                key: 1,
                title: 'Lawson',
                text: 'I can tell stories',
                img: `images/guitar.jpg`,
                updated: '2019/05/10'
            },
            {
                key: 2,
                title: 'Andy',
                text: 'I can play piano',
                img: `images/piano.jpg`,
                updated: '2019/05/19'
            },
            {
                key: 3,
                title: 'Andy',
                text: 'I can sing',
                img: `images/sing.jpg`,
                updated: '2019/05/19'
            },
            {
                key: 5,
                title: 'Andy',
                text: 'I can dance',
                img: `images/ballet.jpg`,
                updated: '2019/05/19'
            },
            {
                key: 6,
                title: 'Andy',
                text: 'I can be a clown',
                img: `images/clown.jpg`,
                updated: '2019/05/19'
            }
        ]
        console.log(data.length)

        let cards = data.map(d => {
            return (
            <Card key={d.key} style={{minWidth: '200px'}}>
                <Card.Img className="carding" style={{width:'150px',height:'150px',borderRadius:'50%',marginLeft:'22px',marginTop:'10px',border:'solid 5px #eee'}} variant="top" src={d.img}/>
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title >{d.title}</Card.Title>
                    <Card.Text>{d.text}</Card.Text>
                </Card.Body>

            </Card>)
        });

        console.log(cards)

        return(
        <div>
            <h1 className="title">{this.props.title}</h1>
            <Row className='justify-content-md-center scrollbar' style={{margin: "50px 80px"}}>
                <CardDeck style={{flexFlow: "row nowrap", margin: "10px 0"}}>
                    {cards}
                </CardDeck>
            </Row>
        </div>);
    }
}
