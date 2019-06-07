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
            time: new Array(24).fill(false),
            data: null
        };

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeClick = this.handleTimeClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){

        let time = [];
        for(let i = 0; i < 24; i+=4){
            time[i] = (
                <Row>
                    <Button color={this.state.time[i] ? 'secondary' : 'primary'} key={i}
                        onClick={()=> {this.handleTimeClick(i)}} style={{width: '21%'}}>
                        {i} ~ {i+1}
                    </Button>
                    <Button color={this.state.time[i+1] ? 'secondary' : 'primary'} key={i+1}
                        onClick={()=> {this.handleTimeClick(i+1)}} style={{width: '21%'}}>
                        {i+1} ~ {i+2}
                    </Button>
                    <Button color={this.state.time[i+2] ? 'secondary' : 'primary'} key={i+2}
                        onClick={()=> {this.handleTimeClick(i+2)}} style={{width: '21%'}}>
                        {i+2} ~ {i+3}
                    </Button>
                    <Button color={this.state.time[i+3] ? 'secondary' : 'primary'} key={i+3} 
                        onClick={()=> {this.handleTimeClick(i+3)}} style={{width: '21%'}}>
                        {i+3} ~ {i+4}
                    </Button>
                </Row>
            )
        }

        return (
            <Container style={{width: '100%'}} >
                <h3>Availability</h3>
                <Row className='p-2'>
                    <Col sm={12} lg={6}>
                        <Calendar minDate={new Date()} onClickDay={value => {this.handleDateChange(value)}}/>
                    </Col>
                    <Col sm={12} lg={6}>
                        {time.map(t => {return t;})}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button color='primary' onClick={this.handleSubmit}>Submit</Button>
                    </Col>
                </Row>
            </Container>
        );
    }

    handleDateChange(value){
        console.log(value);
    }

    handleTimeClick(value){
        let newTime = []
        this.setState({time: this.state.time.map((t, it) => {
            return it == value? !t : t;
        })})
    }

    handleSubmit(){

    }
};