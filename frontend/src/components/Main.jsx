import React from 'react';

import SignInWithGoogle from './SignInWithGoogle.jsx';
import OAuthButton from './OAuthButton.jsx';
import {withAuthenticator, Authenticator} from 'aws-amplify-react';
import Amplify, {Auth, Hub} from 'aws-amplify';
import awsmobile from '../aws-exports';

Amplify.configure(awsmobile);

import Button from 'react-bootstrap/Button'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavDropdown,
    Form,
    NavbarCollapse,
    UncontrolledDropdown,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
} from 'reactstrap';

import {getUserData} from '../api/user.js';
import {postMoney,getMoney, get, post} from 'api/post.js'
import Today from 'components/Today.jsx';

import Wellcome from 'components/Wellcome.jsx';
import Artist from 'components/Artist.jsx';
import Login from 'components/Login.jsx';
import Account from 'components/Account.jsx';
import PostForm from 'components/PostForm.jsx';
import PostModal from 'components/PostModal.jsx';
import Store from 'components/Store.jsx';
import './Main.css';


class Main extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        var authData = this.props.authData;
        this.state = {
            unit: 'metric',
            dropdownOpen: false,
            isModalShow: false,
            money: 0,
            userData: { id: authData.attributes.sub, name: authData.username},
            navbarToggle: false

        };
        this.toggle = this.toggle.bind(this);

        this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.updateMoney = this.updateMoney.bind(this);
        this.getUserData = this.getUserData.bind(this);
        this.test = this.test.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount (){
        if(this.props.authState == "signedIn"){
            this.getUserData(this.props.authData.attributes.sub, this.props.authData.username);
        }
    }


    render() {
       //console.log('main enter');
        var btn_info_style = {
            background: "#17a2b8",
            border: "none",
            padding: "6px 12px",
            color: "white"
        };

        return (
            <Router>

                <div className={`main bg-faded ${this.state.group}`}>
                    <Navbar color="light" light expand={"md"}>
                        <NavbarBrand href="/">iTalent</NavbarBrand>
                        <NavbarToggler onClick={this.handleNavbarToggle} />
                        <Collapse isOpen={this.state.navbarToggle} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button variant="outline-info" onClick={this.openModal}>儲值
                                        <Store triggerchangemoney={this.updateMoney} onHide={this.closeModal} show={this.state.isModalShow}/>
                                    </Button>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} onClick={this.handleNavbarToggle} to='/artist'>Artist</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} onClick={this.handleNavbarToggle} to='/account'>Account</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} onClick={this.handleNavbarToggle} to='/upload'>Upload</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to='/'>
                                        <img src="images/coins.png" style={{width: "20px", marginRight: "10px"}}></img>
                                        <span>餘額 ： {this.state.userData.money} 元</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <Button variant="outline-danger" onClick={this.logout}>登出
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>

                    <Route exact path="/" render={() => (
                        <Wellcome/>
                    )}/>
                    <Route exact path="/artist" render={() => (
                        <Artist userId={this.state.userData.id} userData={this.state.userData}/>
                    )}/>
                    <Route exact path="/account" render={() => (
                        <Account userId={this.state.userData.id} userData={this.state.userData}/>
                    )}/>
                    <Route exact path="/upload" render={() => (
                        <PostForm userId={this.state.userData.id} userData={this.state.userData}/>
                    )}/>
                </div>
            </Router>
        );
    }
    test()
    {
      var money=0;
      getMoney('allen').then(res=>{
        money=res.data[0].money;
        //console.dir(money,'moneyyy');
      }).then(res=>{
        //console.log('enter');
        this.setState({
          money:money
        })
        //console.log(this.state.money);
      }).catch(e => {
          console.log(e);
          alert('fail');
      });;

    }
    updateMoney(cash)
    {
        post('api/post/money', {
            userid: this.state.userData.id, money: cash
        })
        .then(()=>{
            this.getUserData(this.state.userData.id);
        })
        .catch(e=>{
            console.log(e);
        })
      
    }
    openModal(){
        this.setState({isModalShow: true});
    }
    closeModal(e){
        e.stopPropagation();
        this.setState({isModalShow: false})
    }
    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }
    handleNavbarToggle() {
        this.setState((prevState, props) => ({
            navbarToggle: !prevState.navbarToggle
        }));
    }

    getUserData(id, username){
        getUserData(id, username)
        .then(data => {
            this.setState({userData: data});
        })
        .catch(e => {
            console.log(e)}
        );
    }

    logout(){
        try {
            Auth.signOut()
        } catch(e){
            console.log(e);
        }
    }
}

export default withAuthenticator(Main, {
    // Render a sign out button once logged in
    // includeGreetings: true,
    // Show only certain components
    // authenticatorComponents: [MyComponents],
    // display federation/social provider buttons
    // federated: { myFederatedConfig },
    // customize the UI/styling
    // theme: { myCustomTheme }
});


// export default Main;
