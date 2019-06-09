import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import {Col, Row, Button, Container, Tab, Nav, Card, Image, Table} from 'react-bootstrap';
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
              payment:'未付款',
              img: `images/piano.jpg`,
              updated: '2019/05/13',
              score:9.0
          }

      ]
      console.log(data.length)



      let cards = data.map(d => {
        let title_style = {
            background: "#17a2b8",
            color: "white",
            display: "inline-block",
            padding: "3px 5px",
            letterSpacing: "3px",
            borderRadius: "5px"
        }
        var state = '';
        if (d.payment === '已付款') {
            state = '已付款';
        } else {
            state = <button className="m-2 pay-btn">付款</button>;
        }
        return (
            <tr>
                <td style={{verticalAlign: "middle"}}>{d.key}</td>
                <td style={{verticalAlign: "middle"}}>{d.talent}</td>
                <td style={{verticalAlign: "middle"}} className="d-none d-lg-table-cell d-xl-none"><img className="round float-left m-3" style={{ width: "15vh", height: "15vh", border: "3px solid #f4f4f4", borderRadius: "50%" }} src={d.img} /></td>
                <td style={{verticalAlign: "middle"}}>{d.title}</td>
                <td style={{verticalAlign: "middle"}}>{d.score}</td>
                <td style={{verticalAlign: "middle"}}>{d.price}</td>
                <td style={{verticalAlign: "middle"}}>{state}</td>
            </tr>
            // <Card  key={d.key} className="m-4" style={{width: "100%"}}>
            //     <div className="d-flex flex-row align-items-center">
            //         <Card.Img  className="round float-left m-3" style={{width: "15vh", height: "15vh", border: "3px solid #f4f4f4", borderRadius: "50%"}} src={d.img}/>
            //         <Card.Body>
            //             <Card.Title style={title_style}>{d.title}</Card.Title>
            //             <Card.Text>才藝：{d.talent}</Card.Text>
            //             <Card.Text>價錢：{d.price}</Card.Text>
            //             <Card.Text>評分：{d.score}</Card.Text>
            //         </Card.Body>                    
            //     </div>
            //     <Card.Footer className="d-flex flex-row align-items-center justify-content-between">
            //         <Card.Text className="m-0">付款狀態：{d.payment}</Card.Text>
            //         <button className="m-2 pay-btn">付款</button>
            //     </Card.Footer>
            // </Card>
        )

      });
      return(
        <Table responsive bordered hover>
            <thead>
                <th style={{verticalAlign: "middle"}}>編號</th>
                <th style={{verticalAlign: "middle"}}>才藝</th>
                <th style={{verticalAlign: "middle"}} className="d-none d-lg-table-cell d-xl-none">圖片</th>
                <th style={{verticalAlign: "middle"}}>姓名</th>
                <th style={{verticalAlign: "middle"}}>評分</th>
                <th style={{verticalAlign: "middle"}}>價錢</th>
                <th style={{verticalAlign: "middle"}}>操作</th>
            </thead>
            <tbody>
                {cards}
            </tbody>
        </Table>
        // <Container>
        //     {cards}
        // </Container>
      )

    };

}
