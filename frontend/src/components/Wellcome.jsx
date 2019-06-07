import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import {
    Carousel, Container, Row, Col
} from 'react-bootstrap';
import './Wellcome.css';
import Button from 'react-bootstrap/Button'
// import React_icon from './img/React-icon.png';
import Recommend from './Recommend.jsx'
import PostCard from 'components/PostCard.jsx';
import { newPost, getHot,getLatest,getRecommend } from 'api/post.js';
import { $$asyncIterator } from 'iterall';
export default class Wellcome extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          loading:false,
          dropdownOpen: false,
          hot_datas:[],
          latest_datas:[]
        };

        this._validAuthStates = ['signedIn'];

    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    componentDidMount() {
      console.log('gethotdata enter');
      var titles=[]
      var categorys=[]
      var data=[]
      var prices = []
      var experiences=[]
      let cards
      getHot()
      .then(res=>{

        res.data.forEach((data)=>{

          titles.push(data.title);
          categorys.push(data.category);
          prices.push(data.price);
          experiences.push(data.experience);
        })
        for(var i=0;i<titles.length;i++)
        {
          data.push({
            img: `images/guitar.jpg`,
            title:titles[i],
            category:categorys[i],
            price:prices[i],
            experience:experiences[i]
          })
        }

      })
      .then(res=>{
           this.setState({
             hot_datas:data
           })
           //console.log(this.state.datas);
        })

        getLatest().then(res=>{

          res.data.forEach((data)=>{

            titles.push(data.title);
            categorys.push(data.category);
            prices.push(data.price);
            experiences.push(data.experience);
          })
          for(var i=0;i<titles.length;i++)
          {
            data.push({
              img: `images/guitar.jpg`,
              title:titles[i],
              category:categorys[i],
              price:prices[i],
              experience:experiences[i]
            })
          }

        }).then(res=>{
             this.setState({
               latest_datas:data
             })
             //console.log(this.state.datas);
          })
    }
    render() {
        //console.log(this.state.datas);
        const carousel_title = {
            color: 'black'
        };
        const carousel_second_title = {
            color: 'black'
        };



        return (
            <div className="wellcome">
                <div className="container">
                    <br />
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <form /*className="card card-sm"*/ style={{ margin: 'auto', width: '80%'}}>
                                <div className=" row no-gutters align-items-center" >
                                    <div className="col">
                                        <input style={{fontFamily: "'Noto Sans TC', sans-serif"}} className="form-control form-control-lg" type="search" placeholder="藝人、才藝...">
                                        </input>
                                    </div>

                                    <div className="col-auto">
                                        <button onMouseOut={this.outMainbtn} onMouseOver={this.hoverMainbtn} style={{ marginLeft: "0.5rem", background: "#17a2b8", color: "#fff" }} className="btn btn-lg search-btn" type="submit">Search</button>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>
                </div>

                <Container>
                    <Row>
                        <Col>
                            <Recommend  hotData={this.state.hot_datas} latestData={this.state.latest_datas} name={this.state.title} title="熱門" keyword='hot'/>
                            <Recommend  hotData={this.state.hot_datas} latestData={this.state.latest_datas} name={this.state.title} title="最新" keyword='latest'/>
                        </Col>
                    </Row>
                </Container>
                <footer className="container-fluid fh5co-footer" id="id_footer">
                    <Container>
                        <Row>
                            <Col lg={6} sm={12} className='justify-content-center d-flex'>
                                <div className='p-2'>
                                    <a href='www.facebook.com'><b>Facebook</b></a>
                                </div>
                                <div className='p-2'>
                                    <a href='www.instagram.com'><b>Instagram</b></a>
                                </div>
                            </Col>
                            <Col lg={6} sm={12}>
                                <div>
                                    <span className="email"><i className="far fa-envelope"></i></span>
                                    <b>chaowen.nthu@gmail.com</b>
                                </div>
                                <div>
                                    <span className="phone"><i className="fas fa-phone"></i></span>
                                    <b>+886-931-875-878</b>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        );
    }

    hoverMainbtn(e) {
        $(e.target).css('background', "#14bbd4");
    }

    outMainbtn(e) {
        $(e.target).css('background', "#17a2b8");
    }

}
