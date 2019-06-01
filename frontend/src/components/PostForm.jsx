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

export default class PostForm extends React.Component{
    
    constructor(props){
        super(props);

        this.inputEl = null;

        this.state={
            inputValue: '',
            toggle: false,
            youtubeId: '',
            yt_ready: 'none'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLinkChange = this.handleLinkChange.bind(this);
    }

    componentWillUpdate(){
      
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
                  <Input type="text" name="title" id="post-title" placeholder="Your Title" />
                </FormGroup>
                <FormGroup>
                  <Label for="category">類別</Label>
                  <Input type="select" name="select" id="exampleSelect">
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
                  <Input type='text' name="expeience" id="experience" />
                </FormGroup>
                <FormGroup>
                  <Label for="price">售價</Label>
                  <Input type="text" name="price" id="price" />
                </FormGroup>
                <FormGroup>
                  <Label for="price">售價</Label>
                  <Input type="text" name="price" id="price" />
                </FormGroup>
                <FormGroup>
                  <Label for="detail">服務詳情</Label>
                  <Input type="textarea" name="detail" id="detail" />
                </FormGroup>
                <FormGroup>
                  <Label for="yt-link">YouTube 連結</Label>
                  <Input type="text" name="yt-link" id="yt-link" getRef={el => {this.inputEl = el}}  onChange={this.handleLinkChange} value={this.state.inputValue}/>
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
                    <Input type="checkbox" />
                    我同意以上資料供iTalent使用
                  </Label>
                </FormGroup>
                <FormGroup className='p-2'>
                  <Button type='submit'>Submit</Button>
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
        if(link.hostname=='youtu.be'){
          this.setState({youtubeId: link.pathname.split('/')[1]});
          id=link.pathname.split('/')[1];
        }
        else if(link.hostname=='www.youtube.com'){
          this.setState({youtubeId: link.searchParams.get('v')});
          id = link.searchParams.get('v');
        }
        else{
          this.setState({youtubeId: ''});
          id = '';
        }

        this.setState({inputValue: e.target.value});

        if(id.length==11)
          this.setState({yt_ready: 'block'});
        else
          this.setState({yt_ready: 'none'});

        console.log(id, id.length);
      }
      catch(error){
        this.setState({inputValue: e.target.value});
        console.log('error')
      }
    }

    handleInputChange(){
        console.log('input change');
    }

    handleToggle(){
        console.log('toggle');
    }

    handleSubmit(e){
      e.preventDefault();
        console.log("submit");
    }
}