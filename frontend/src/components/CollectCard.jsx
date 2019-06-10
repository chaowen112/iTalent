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
import Mycollection from 'components/Mycollection.jsx';
import './PostCard.css';
import uuid from 'uuid/v4';
import { $$asyncIterator } from 'iterall';
export default class CollectCard extends React.Component{

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
            userId:''
        }

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        //this.addCollection = this.addCollection.bind(this);
        this.deleteCollect = this.deleteCollect.bind(this);
    }
    componentDidMount(){
      //console.log(typeof(this.props.userId),'enter postcard');

    }


    render(){

     //console.log(this.props.data);

      let name_pool = ['Noah','Liam','William','Benjamin','Jacob','Elijah','Ethan','Oliver','Daniel','Lucas','Matthew'];
     //console.log(this.props.data);
      let title=this.props.data.title;
      let price=this.props.data.price;
      let img = `images/random/${this.props.data.id}.jpg`;
      let postid = this.props.data.id;
      let views = this.props.data.views;
      let category = this.props.data.category;
      var cardStyle = {boxShadow: "0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)", minWidth: '200px'}
      return(
        <Router>
      <div className="m-2">
              <Card   style={cardStyle}>
                  <Card.Img onClick={this.openModal} className="carding" style={{ width: '150px', height: '150px', borderRadius: '50%', marginLeft: '22px', marginTop: '10px', border:'solid 5px #17a3b873'}} variant="top" src={img}/>
                  <Card.Body style={{textAlign: 'center'}}>
                        <Card.Title style={{letterSpacing: "0.3rem", fontSize: "1.5rem", fontWeight: "900"}}>{name_pool[postid%10]}</Card.Title>
                        <Card.Text>{category}</Card.Text>
                        <Card.Text><i className="far fa-eye m-2"></i>{views}</Card.Text>
                        <Link to ='mycollection'>
                        <Button onClick={this.deleteCollect} variant={this.state.disabled ?"outline-secondary" :"outline-dark"} disabled={this.state.disabled}   >移除</Button>
                        </Link>
                  </Card.Body>
              </Card>
              <PostModal onHide={this.closeModal} show={this.state.isModalShow} artistId={this.state.artistId} userId={this.props.userId}/>
              <Route exact path="/mycollection" render={() => (
                  <Mycollection userid={this.props.userid}/>
              )}/>
      </div>
      </Router>
      );

    }
    deleteCollect(){
      //console.log('enter');
      
      deleteCollect(this.props.userId,this.props.data.id)
    }
    addCollection(){
        //console.log('add');
        console.log(this.props.userId,'enter');
          var userid = 123;
          var titles=[]
          var categorys=[]
          var data=[]
          var prices = []
          var experiences=[]
          let cards

            addCollect(this.props.userId,this.props.data.title, '演員/女演員', 1, this.props.data.price, false, 'detail', this.props.data.id)

              this.setState({
                disabled:true
              })


    }

    openModal(){
        this.setState({isModalShow: true});
    }

    closeModal(e){
        e.stopPropagation();
        this.setState({isModalShow: false})
    }


}
