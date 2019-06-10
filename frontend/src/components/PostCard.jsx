import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import axios from 'axios';
import {Card, CardDeck , Container, Row, Col, CardColumns, Button,ButtonGroup}from 'react-bootstrap';
//import './Recommend.css';
import {newPost,getHot} from 'api/post.js';
import {addCollect,getCollect,deleteCollect} from 'api/collect.js';
import {getUserData} from '../api/user.js';
import PostModal from 'components/PostModal.jsx';
import Post from 'components/Post.jsx';
import './PostCard.css';
import uuid from 'uuid/v4';
import './Postcard.css';
export default class PostCard extends React.Component{

    constructor(props){
        super(props);

        this.state={
            isModalShow: false,
            Title:[],
            category:[],
            ts:[],
            by_hour:[],
            price:[],
            experience:[],
            dataAllocate:[],
            datas:[],
            disabled: false,
            userId:'',
            hasClick:'收藏',
            img: this.chooseImg(0,40)
        }

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.addCollection = this.addCollection.bind(this);


    }
    componentDidMount(){
      //console.log(typeof(this.props.userId),'enter postcard');

    }

    chooseImg(min, max) {
      // var number = Math.floor(Math.random() * (max-min+1)) + min;
      return `images/random/${this.props.data.id}.jpg`;
    }


    render(){
      let name_pool = ['Noah','Liam','William','Benjamin','Jacob','Elijah','Ethan','Oliver','Daniel','Lucas','Matthew'];
     //console.log(this.props.data);
      let title=this.props.data.title;
      let price=this.props.data.price;
      let img = this.state.img;
      let postid = this.props.data.id;
      let views = this.props.data.views;
      let category = this.props.data.category;
      var cardStyle = {boxShadow: "0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)", minWidth: '200px'}
      return(
      <div>
          <hr/>

          <hr/>


              <Card   style={cardStyle}>
                  <Card.Img onClick={this.openModal} className="carding" style={{ width: '150px', height: '150px', borderRadius: '50%', marginLeft: '22px', marginTop: '10px', border:'solid 5px #17a3b873'}} variant="top" src={img}/>
                  <Card.Body style={{textAlign: 'center'}}>
                        <Card.Title style={{letterSpacing: "0.3rem", fontSize: "1.5rem", fontWeight: "900"}}>{name_pool[postid%10]}</Card.Title>
                        <Card.Text>{category}</Card.Text>
                        <Card.Text><i className="far fa-eye m-2"></i>{views}</Card.Text>
                        <Button onClick={this.addCollection} variant={this.state.disabled ?"info" :"outline-secondary"} >{this.state.hasClick}</Button>
                  </Card.Body>
              </Card>
              <PostModal onHide={this.closeModal} show={this.state.isModalShow} artistId={this.state.artistId} userId={this.props.userId}/>

      </div>
      );

    }
    addCollection(){
        //console.log('add');
        if(this.state.disabled)
        {
          deleteCollect(this.props.userId, this.props.data.id)
            console.log(this.props.data.id);
            this.setState({
              disabled:false,
              hasClick:'收藏'
            })
        }
        else{
          console.log(this.state.userId,'false');

            var titles=[]
            var categorys=[]
            var data=[]
            var prices = []
            var experiences=[]
            let cards

              addCollect(this.props.userId,this.props.data.title, '演員/女演員', 1, this.props.data.price, false, 'detail', this.props.data.id)
                console.log(this.props.data.id);
                this.setState({
                  disabled:true,
                  hasClick:'移除'
                })
        }



    }

    openModal(){
        this.setState({isModalShow: true});
    }

    closeModal(e){
        e.stopPropagation();
        this.setState({isModalShow: false})
    }


}
