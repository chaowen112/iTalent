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
      var img = this.props.userData.photo || 'images/guitar.jpg';

      return (
          <div>
            <div className="person-card">
                <img src={img} alt="photo"/>
                <Button style={{margin: "1rem auto 0.5rem auto", color: "#fff", borderColor: "#fff"}} variant="outline-info">上傳頭像</Button>
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
            </div>              
          </div>

        // <Card className="d-flex flex-row justify-content-center align-items-center" style={{minWidth: "80%", boxShadow: "0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)"}}>
        //     <Card.Img style={{ width: "15vh", height: "15vh", borderRadius: "50%", border: "solid 5px #17a3b873"}} src={img}/>
        //     <Card.Body>
        //         <Card.Title >
        //             <p className="card_title">姓名：{this.props.userData.name}</p>
        //             {/* <br></br>
        //             <p className="card_title">生日：1996/05/23</p> */}
        //             {/* <br></br>
        //             <p className="card_title">性別：男</p> */}
        //             {/* <br></br>
        //             <p className="card_title">才藝：吉他</p> */}
        //             <p className="card_title">電話：{this.props.userData.phone}</p>
        //             <p className="card_title">郵件：{this.props.userData.email}</p>
        //         </Card.Title>
        //     </Card.Body>
        // </Card>
      )



    }
}
