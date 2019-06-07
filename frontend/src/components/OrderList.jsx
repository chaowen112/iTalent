import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import {Col, Row, Button, Container, Tab, Nav, Card, Image} from 'react-bootstrap';
import './OrderList.css';

export default class OrderList extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
      let data = [
          {
              key: 0,
              title: 'Andrew',
              talent:'guitar',
              price:'4000',
              payment:'已付款',
              img: `images/guitar.jpg`,
              updated: '2019/05/18',
              score:8.5
          },
          {
              key: 1,
              title: 'Andy',
              talent:'piano',
              price:'5000',
              payment:'已付款',
              img: `images/piano.jpg`,
              updated: '2019/05/13',
              score:9.0
          }

      ]
      console.log(data.length)



      let cards = data.map(d => {
        return (
            <Card  key={d.key} className="m-4" style={{width: "100%"}}>
                <div className="d-flex flex-row align-items-center">
                    <Card.Img  className="round float-left m-3" style={{width: "15vh", height: "15vh", border: "3px solid #f4f4f4", borderRadius: "50%"}} src={d.img}/>
                    <Card.Body>
                        <Card.Title style={{ background: "#17a2b8", color: "white", display: "inline-block", padding: "0 5px", letterSpacing: "3px"}}>{d.title}</Card.Title>
                        <Card.Text>才藝：{d.talent}</Card.Text>
                        <Card.Text>價錢：{d.price}</Card.Text>
                        <Card.Text>評分：{d.score}</Card.Text>
                    </Card.Body>                    
                </div>
                <Card.Footer className="d-flex flex-row align-items-center justify-content-between">
                    <Card.Text className="m-0">付款狀態：{d.payment}</Card.Text>
                    <button className="m-2 pay-btn">付款</button>
                </Card.Footer>
            </Card>
        )

      });
      return(
        <Container>
            {cards}
        </Container>
      )

    };

}
