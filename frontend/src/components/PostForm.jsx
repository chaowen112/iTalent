import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import {Card, CardDeck , Container, Row, Col, CardColumns, Button}from 'react-bootstrap';

export default class PostForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputValue: ''
        };

        this.handleinputChange = this.handleinputChange.bind(this);
    }

    render(){
        return(
            <div className='weather-form'>
            <Form className='form-inline justify-content-center' onSubmit={this.handleSubmit}>
                <Input type='text' name='yt-url' getRef={el => {this.inputEl = el}} value={this.state.inputValue} onChange={this.handleInputChange}></Input>&nbsp;
                <ButtonDropdown type='buttom' isOpen={this.state.tempToggle} toggle={this.handleTempToggle}>
                    <DropdownToggle type='button' caret color="secondary">
                        &ordm; Type
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem type='button' onClick=''>&ordm; C</DropdownItem>
                        <DropdownItem type='button' onClick=''>&ordm; F</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>&nbsp;
                <Button color="info">Upload</Button>
            </Form>
        </div>
        )
    }

    handleInputChange(){
        
    }
}