import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import {Col, Row, Button, Container, Tab, Nav, Sonnet} from 'react-bootstrap';
import './Account.css';

import OrderList from 'components/OrderList.jsx';
import Mycollection from 'components/Mycollection.jsx';
import PersonalData from 'components/PersonalData.jsx';
import Emails from 'components/Emails.jsx';

export default class Account extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        <Nav.Link eventKey="first">訂單查詢</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">收件匣</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">我的收藏</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="fourth">個人資料</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <OrderList/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <Emails userData={this.props.userData} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <Mycollection/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                        <PersonalData userData={this.props.userData}/>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
            </Container>
        );
    }
}
