import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import {Button, ButtonGroup, Col, Container, Row} from 'reactstrap';

import Calendar from 'react-calendar';

export default class Availability extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userId: null
        }
    }

    render(){

        let time = [];
        for(let i = 0; i < 24; i+=4){
            time[i] = (
                <Row>
                    <ButtonGroup style={{width: '100%'}}>
                    <Button color='primary' style={{width: '25%'}} key={i}>{i} ~ {i+1}</Button>
                    <Button color='primary' style={{width: '25%'}} key={i+1}>{i+1} ~ {i+2}</Button>
                    <Button color='primary' style={{width: '25%'}} key={i+2}>{i+2} ~ {i+3}</Button>
                    <Button color='primary' style={{width: '25%'}} key={i+3}>{i+3} ~ {i+4}</Button>
                    </ButtonGroup>
                </Row>
            )
        }

        return (
            <Container style={{width: '100%'}} >
                <h3>Availability</h3>
                <Row>
                    <Calendar minDate={new Date()}/>
                </Row>
                {time.map(t => {return t;})}      
            </Container>
        )
    }
};