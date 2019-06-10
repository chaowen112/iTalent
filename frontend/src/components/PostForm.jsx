import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

//import {Button, Form, Input, Dropdown, ButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu}from 'react-bootstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

import YouTube from 'react-youtube';
import {newPost} from '../api/post.js';

export default class PostForm extends React.Component{

    constructor(props){
        super(props);

        this.inputEl = null;

        this.state={
            inputValue: '',
            youtubeId: '',
            yt_ready: 'none',
            title: '',
            category: '演員/女演員',
            experience: '',
            price: '',
            by_hour: false,
            detail: '',
            userid:123
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLinkChange = this.handleLinkChange.bind(this);

    }

    render(){

      const opts = {
        width: '100%',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };

      return(
        <Container>
          <Row>
            <Col>
              <Form onSubmit={this.handleSubmit} action='/upload' method='post'>
                <FormGroup>
                  <Label for="title">Title</Label>
                  <Input required type="text" name="title" id="post-title" placeholder="Your Title" onChange={e => {this.setState({title: e.target.value})}} />
                </FormGroup>
                <FormGroup>
                  <Label for="category">類別</Label>
                  <Input
                    required
                    type="select"
                    name="select"
                    id="exampleSelect"
                    onChange={e => {
                      this.setState({category: e.target.value});
                    }}>
                    <option>演員/女演員</option>
                    <option>樂隊/音樂人</option>
                    <option>書法藝術家</option>
                    <option>小丑</option>
                    <option>漫畫家</option>
                    <option>文案作家</option>
                    <option>舞蹈家</option>
                    <option>DJ</option>
                    <option>平面設計師</option>
                    <option>主持/司儀</option>
                    <option>魔術師</option>
                    <option>彩妝師</option>
                    <option>攝影師</option>
                    <option>編劇</option>
                    <option>歌手</option>
                    <option>翻譯員</option>
                    <option>影像編輯</option>
                    <option>其他</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="experience">經驗</Label>
                  <Input required type='text' name="expeience" id="experience" onChange={e => {this.setState({experience: e.target.value})}} />
                </FormGroup>
                <FormGroup>
                  <Label for="price">售價</Label>
                  <Input required type="text" name="price" id="price"  onChange={e => {this.setState({price: e.target.value})}} />
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox"
                    checked={this.state.by_hour}
                    onChange={e=>{this.setState({by_hour: e.target.checked})}} />
                    計時收費
                  </Label>
                </FormGroup>
                <FormGroup>
                  <Label for="detail">服務詳情</Label>
                  <Input required type="textarea" name="detail" id="detail"  onChange={e => {this.setState({detail: e.target.value})}} />
                </FormGroup>
                <FormGroup>
                  <Label for="yt-link">YouTube 連結</Label>
                  <Input required type="text" name="yt-link" id="yt-link" getRef={el => {this.inputEl = el}}  onChange={this.handleLinkChange} value={this.state.inputValue}/>
                  <div style={{display: this.state.yt_ready}}>
                    <YouTube
                      videoId={this.state.youtubeId}
                      opts={opts}
                      onReady={this._onReady}
                    />
                  </div>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input required type="checkbox" />
                    我同意以上資料供iTalent使用
                  </Label>
                </FormGroup>
                <FormGroup className='p-2'>
                  <Button  type='submit'>Submit</Button>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      );
    }

    handleLinkChange(e){
      try{
        let link = new URL(e.target.value);
        let id = ''
        console.log(e.target.value)
        if(link.hostname=='youtube'){
          id = link.pathname.split('/')[1];
        }
        else if(link.hostname=='www.youtube.com'){
          id = link.searchParams.get('v');
        }
        else{
          id = '';
        }
        
        this.setState({inputValue: e.target.value, youtubeId: id, yt_ready: id.length == 11 ? 'block' : 'none'});
      }
      catch(error){
        console.log(error);
        this.setState({inputValue: e.target.value});
        console.log('error')
      }
    }

    handleSubmit(e){
      e.preventDefault();
      console.log("submit");
      if(!this.state.youtubeId){
        alert('請填入正確的youtube網址')
        return;
      }

      newPost(this.state.userid,this.state.title, this.state.category, this.state.experience, this.state.price, this.state.by_hour, this.state.detail, this.state.youtubeId);
    }
}
