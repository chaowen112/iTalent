import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import {Button, ButtonGroup, Col, Container, Row, InputGroup, Input, Label} from 'reactstrap';

import Calendar from 'react-calendar';
import { get, post } from '../api/post.js';
import uuid from 'uuid/v4';

export default class Availability extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Array(24).fill(false),
            allDay: false,
            disabled: []
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
                    <Button color={this.state.time[i]|this.state.disabled[i] ? 'secondary' : 'primary'} key={i}
                        disabled = {this.state.disabled[i]}
                        onClick={()=> {this.handleTimeClick(i)}} style={{width: '21%'}}>
                        {i} ~ {i+1}
                    </Button>
                    <Button color={this.state.time[i+1]|this.state.disabled[i+1] ? 'secondary' : 'primary'} key={i+1}
                        disabled = {this.state.disabled[i+1]}
                        onClick={()=> {this.handleTimeClick(i+1)}} style={{width: '21%'}}>
                        {i+1} ~ {i+2}
                    </Button>
                    <Button color={this.state.time[i+2]|this.state.disabled[i+2] ? 'secondary' : 'primary'} key={i+2}
                        disabled = {this.state.disabled[i+2]}
                        onClick={()=> {this.handleTimeClick(i+2)}} style={{width: '21%'}}>
                        {i+2} ~ {i+3}
                    </Button>
                    <Button color={this.state.time[i+3]|this.state.disabled[i+3] ? 'secondary' : 'primary'} key={i+3} 
                        disabled = {this.state.disabled[i+3]}
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
                    <Col lg={{offset: 12}} sm={{offset: 0}}>
                        <Label check className={'p-2'}>
                            <Input type="checkbox"
                            checked={this.state.allDay}
                            onChange={e=>{
                                this.setState({
                                    allDay: e.target.checked, 
                                    time: this.state.time.map(t=>{
                                        return e.target.checked ? true : false;
                                        })
                                    });
                                }} />
                            預約整天
                        </Label>
                        <Button color='primary' onClick={this.handleSubmit}>Submit</Button>
                    </Col>
                </Row>
            </Container>
        );
    }

    handleDateChange(value){
        this.setState({date: value.toLocaleDateString(), time: Array(24).fill(false)});
        get('/api/post/available', {id: this.props.postData.userid, date: value.toLocaleDateString()})
        .then(data => {
            let disabled = Array(24).fill(false);
            data.forEach(d => {console.log(d.time);disabled[d.time] = true});
            this.setState({disabled: disabled});
        })
        .catch(e => {console.log(e)});
    }

    handleTimeClick(value){
        let newTime = []
        this.setState({time: this.state.time.map((t, it) => {
            return it == value? !t : t;
        })})
    }

    handleSubmit(){
        console.log(this.props.postData);
        if(!this.state.date || !this.state.time){
            alert('請選擇日期與時間');
            return;
        }
        const reducer = (d, d1) => {return !d&!d1}
        let time=null;
        if(this.state.disabled.length && this.state.allDay)
            time = Array(24).fill(true);
        else
            time = this.state.time.map((d, it) => {
            return d & !this.state.disabled[it];
        })
        console.log(this.props.postData.userid);
        post('/api/contract/new', {
            artist: this.props.postData.userid,
            orderId: uuid(),
            time: time,
            orderer: this.props.userId,
            postId: this.props.postData.id,
            date: this.state.date
        })
        .then(() => {
            alert('預約成功');
            let disabled = this.state.time.map((t, it) => {
                return t|this.state.disabled[it];
            })
            console.log(disabled)
            this.setState({disabled: disabled})
        })
        .catch(e => {
            alert('預約失敗');
        })
    }
};