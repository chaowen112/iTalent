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
import Artist from 'components/Artist.jsx';

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
          recommend_datas:[],
          hotData: [{
            title: '',
            detail: ''
        }],
          recommendData: [],
          latestData: []
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
      var titles=[],categorys=[],data=[],prices = [],experiences=[],id=[]
      var rec_titles=[],rec_categorys=[],rec_data=[],rec_prices = [],rec_experiences=[],rec_id=[]
      let cards = null;
      getHot()
      .then(r => {this.setState({hotData: r.data})});
      getLatest()
      .then(r=>{this.setState({latestData: r.data})});
      getRecommend()
      .then(r=>{this.setState({recommendData: r.data})});

    
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
        console.log(this.props.userData);


        return (
          <Router>
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
                                        <option value="0">全部</option>
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
                                        <option value="17">演員/女演員</option>
                                      </select>
                                    </div>
                                    <div className="col-auto">
                                      <Link to="/search">
                                        <button
                                          // onMouseOut={this.outMainbtn}
                                          // onMouseOver={this.hoverMainbtn}
                                          style={{ background: "#17a2b8", color: "#fff" }}
                                          className="btn btn-lg search-btn" type="submit">
                                          <i className="fas fa-search"></i>
                                        </button>
                                      </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <Container>
                    <Row>
                    <Route exact path="/" render={() => {
                      return(
                      <Col>
                          <Hot data={this.state.hotData} title="熱門" userId={this.props.userId}  userData={this.props.userData}/>
                          <Hot data={this.state.latestData} title="最新" userId={this.props.userId}  userData={this.props.userData}/>
                          <Hot data={this.state.recommendData} title="推薦" userId={this.props.userId}  userData={this.props.userData}/>
                      </Col>
                      )
                    }} />
                    <Route exact path="/search" render={() => {
                      var input = $('form input').val();
                      var category = $('form select').find(':selected').text();
                      var title = `搜尋'${category}'類別中關於'${input}'的結果`;
                      return(
                      <Col>
                        <Hot  hotData={this.state.hot_datas}  name={this.state.title} title={title} userId={this.props.userId} />
                      </Col>
                      )
                    }} />
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
          </Router>

        );
    }

    hoverMainbtn(e) {
        $(e.target).css('background', "#14bbd4");
    }

    outMainbtn(e) {
        $(e.target).css('background', "#17a2b8");
    }

    handleSearch(e) {
      e.preventDefault();
      // var input = $('form input').val();
      // var category = $('form select').find(':selected').text();
      // console.log(`搜尋'${category}'類別中關於'${input}'的結果`);
    }

}
