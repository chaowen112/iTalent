import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import {Card, CardDeck , Container, Row, Col, CardColumns}from 'react-bootstrap';
import './PersonalData.css';
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


        //let cards = data.map(d => {
            //return (
            //<Card key={d.key}>
                //<Card.Img variant="top" src={d.img}/>
                //<Card.Body>
                    //<Card.Title>{d.title}</Card.Title>
                    //<Card.Text>{d.text}</Card.Text>
                //</Card.Body>
                //<Card.Footer>
                  //  <small className="text-muted">Last updated on {d.updated}</small>
              //  </Card.Footer>
          //</Card>)
      //  });
      return (
        <div>
        <div >
        <Card.Img className="imgsize"  src={`images/React-icon.png`}/>
        </div>
        <Card.Body>
            <Card.Title ><p className="card_title">姓名：Andrew</p>
                         <br></br>
                         <p className="card_title">生日：1996/05/23</p>
                         <br></br>
                         <p className="card_title">性別：男</p>
                         <br></br>
                         <p className="card_title">才藝：吉他</p>
            </Card.Title>

        </Card.Body>
        </div>
      )



    }
}
