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
import Hot from './Hot.jsx'
import Latest from './Latest.jsx'
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
          latest_datas:[],
          recommend_datas:[]
        };

        this._validAuthStates = ['signedIn'];

    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    componentDidMount() {
      //console.log('gethotdata enter');
      var titles=[],categorys=[],data=[],prices = [],experiences=[]
      var rec_titles=[],rec_categorys=[],rec_data=[],rec_prices = [],rec_experiences=[]
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

      }).then(res=>{
        this.setState({
          hot_datas:data
        })
        titles=[]
         categorys=[]
         data=[]
         prices = []
         experiences=[]

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
             titles=[]
              categorys=[]
              data=[]
              prices = []
              experiences=[]
             //console.log(this.state.datas);
          })

          getRecommend().then(res=>{

            res.data.forEach((data)=>{

              rec_titles.push(data.title);
              rec_categorys.push(data.category);
              rec_prices.push(data.price);
              rec_experiences.push(data.experience);
            })
            for(var i=0;i<rec_titles.length;i++)
            {
              rec_data.push({
                img: `images/guitar.jpg`,
                title:rec_titles[i],
                category:rec_categorys[i],
                price:rec_prices[i],
                experience:rec_experiences[i]
              })
            }

          }).then(res=>{
               this.setState({
                 recommend_datas:rec_data
               })
               //console.log(this.state.datas);
            })
    }
    render() {
    //  console.log('welcome enter');
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
                                    <div className="col m-2">
                                        <input style={{fontFamily: "'Noto Sans TC', sans-serif"}} className="form-control form-control-lg" type="search" placeholder="藝人、才藝...">
                                        </input>
                                    </div>
                                    <div className="col-auto dropdown-select d-none d-md-inline">
                                      <select>
                                        <option value="0">演員/女演員</option>
                                        <option value="1">樂隊/音樂人</option>
                                        <option value="2">書法藝術家</option>
                                        <option value="3">小丑</option>
                                        <option value="4">漫畫家</option>
                                        <option value="5">文案作家</option>
                                        <option value="6">舞蹈家</option>
                                        <option value="7">DJ</option>
                                        <option value="8">平面設計師</option>
                                        <option value="9">主持/司儀</option>
                                        <option value="10">魔術師</option>
                                        <option value="11">彩妝師</option>
                                        <option value="12">攝影師</option>
                                        <option value="13">編劇</option>
                                        <option value="14">歌手</option>
                                        <option value="15">翻譯員</option>
                                        <option value="16">影像編輯</option>
                                      </select>
                                    </div>
                                    <div className="col-auto">
                                      <button
                                        // onMouseOut={this.outMainbtn}
                                        // onMouseOver={this.hoverMainbtn}
                                        style={{ background: "#17a2b8", color: "#fff" }}
                                        className="btn btn-lg search-btn" type="submit">
                                        <i class="fas fa-search"></i>
                                      </button>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>
                </div>

                <Container>
                    <Row>
                        <Col>
                            <Hot  hotData={this.state.hot_datas}  name={this.state.title} title="熱門" />

                            <Latest  latestData={this.state.latest_datas} name={this.state.title} title="最新" />
                            <Recommend  recommendData={this.state.recommend_datas} name={this.state.title} title="推薦" />
                        </Col>
                    </Row>
                </Container>
                <div style={{background: "white", padding: "2rem"}}>
                    <div className="link d-flex flex-row justify-content-center align-items-center">
                        <span className="inline-border"></span>
                        <a href="#" title="Facebook"><i className="fab fa-facebook fa-2x m-2"></i></a>
                        <a href="#" title="Twitter"><i className="fab fa-twitter fa-2x m-2"></i></a>
                        <a href="#" title="Instagram"><i className="fab fa-instagram fa-2x m-2"></i></a>
                        <a href="#" title="Youtube"><i className="fab fa-youtube fa-2x m-2"></i></a>
                        <a href="#" title="Google Plus"><i className="fab fa-google-plus fa-2x m-2"></i></a>
                        <span className="inline-border"></span>
                    </div>
                    <div className="contact d-flex flex-column justify-content-center align-items-center m-2">
                        <div>
                            <span className="email"><i className="far fa-envelope"></i></span>
                            <b>chaowen.nthu@gmail.com</b>
                        </div>
                        <div>
                            <span className="phone"><i className="fas fa-phone"></i></span>
                            <b>+886-931-875-878</b>
                        </div>
                    </div>
                    <div style={{ color: "#17a2b8", textAlign: "center", marginTop: "2rem"}}>
                        <i className="far fa-copyright"></i> 2019 iTalent - All Rights Reserved
                    </div>
                </div>
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
