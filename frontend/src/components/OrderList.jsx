import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import {Col, Row, Button, Container, Tab, Nav, Card, Image} from 'react-bootstrap';

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
              img: `images/React-icon.png`,
              updated: '2019/05/18',
              score:8.5
          }

      ]
      console.log(data.length)



      let cards = data.map(d => {
          return (
          <Container>
          <Row>
          <Col>
          <Card  key={d.key} id="collection_data" style={{width:'100%'}}>
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
          </Col>
          </Row>
          </Container>
        )

      });
      return(
        <div>
        {cards}
        </div>
      )

    };

}
