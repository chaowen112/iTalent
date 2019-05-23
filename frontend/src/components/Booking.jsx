import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import {Card, CardDeck , Container, Row, Col, CardColumns}from 'react-bootstrap';
import './Booking.css';
export default class Booking extends React.Component{

    constructor(props){
        super(props)
    }

    render(){

        let data = [
            {
                key: 0,
                title: 'Andrew',
                talent:'guitar',
                price:'4000',
                payment:'已付款',
                img: `images/React-icon.png`,
                updated: '2019/05/18',
                score:8.5
            },
            {
                key: 1,
                title: 'Lawson',
                talent:'piano',
                price:'5000',
                payment:'已付款',
                img: `images/React-icon.png`,
                updated: '2019/05/10',
                score:9.5
            },
            {
                key: 2,
                title: 'Andy',
                talent:'dance',
                price:'3000',
                payment:'已付款',
                img: `images/React-icon.png`,
                updated: '2019/05/19',
                score:7
            },

        ]
        console.log(data.length)

        let cards = data.map(d => {
            return (
            <div  >
            <Card  key={d.key} id="collection_data" style={{width:'60%',left:200}}>
                <Card.Img  style={{width:'40%'}} src={d.img}/>
                <Card.Body className="cardsize" >
                    <Card.Title>姓名：{d.title}</Card.Title>
                    <Card.Text>才藝：{d.talent}</Card.Text>
                    <Card.Text>價錢：{d.price}</Card.Text>

                    <Card.Text>評分：{d.score}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Text >付款狀態：{d.payment}</Card.Text>
                    <button>付款</button>
                </Card.Footer>

            </Card>
            <br></br>
            </div>
          )
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
