import React, { Component } from 'react';
import { Button } from 'reactstrap';

import ArtistView from './components/artist/ArtistView';
import VendorView from './components/vendor/VendorView';
import AreaView from './components/area/AreaView';
import ProfileView from './components/profile/ProfileView';
import MainList from './components/main/MainList';
import MapList from './components/map/MapList';
import LoginView from './components/login/LoginView';
import './App.css';
import serv from './services/apiservices.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'mainView',
      artists: '',
      vendors: '',
      areas: '',
      token: localStorage.getItem('token') || '',
      user: ''
    }
    this.getArtists = this.getArtists.bind(this);
    this.getVendors = this.getVendors.bind(this);
    this.getAreas = this.getAreas.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.buildHeaders = this.buildHeaders.bind(this);
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  setView = (view) => {
    this.setState({
      screen: view
    });
  }

  componentDidMount = async () => {
    if (this.state.token) await this.getCurrentUser();
    await this.getArtists();
    await this.getVendors();
    await this.getAreas();
  }

  async getArtists() {
    try {
      const artists = await serv.getArtists();
      this.setState({artists});
    } catch (e) {
      console.error(e);
    }
  }

  async getAreas() {
    try {
      const areas = await serv.getAreas();
      this.setState({areas});
    } catch (e) {
      console.error(e);
    }
  }

  async getVendors() {
    try {
      const vendors = await serv.getVendors();
      this.setState({vendors});
    } catch (e) {
      console.error(e);
    }
  }

  async getVendor() {
    try {
      const vendor = await serv.getVendor();
      this.setState(vendor);
    } catch (e) {
      console.error(e);
    }
  }

  buildHeaders() {
    const { token } = this.state;
    return {
        'Authorization': `Bearer ${token}`
    };
  }

  async getCurrentUser() {
    try {
      const headers = this.buildHeaders();
      const user = await serv.getUser(headers);
      await this.setState({user});
    } catch(e) {
      console.log(e);
    }
  }

  async login(data) {
    const headers = this.buildHeaders();
    const { username, password } = data;
    const resp = await serv.loginUser(
      {username, password}, headers
    );
    const token = resp.token;
    await this.setState({token})
    await this.getCurrentUser();
    localStorage.setItem('token',token);
    this.setView('profileView');
  }

  async register(data) {
    console.log(data);
    const resp = await serv.registerUser(data);
    await this.setState({token: resp.token});
    await this.getCurrentUser();
    localStorage.setItem('token',resp.token);
    this.setView('profileView');
  }


  render() {
    //switching between views
    let content;
    switch (this.state.screen) {
      case 'mapView':
       content = <MapList />;
       break;
      case 'artistsView':
       content = <ArtistView artists={this.state.artists || []} />;
       break;
      case 'vendorsView':
       content = <VendorView vendors = {this.state.vendors || []} />;
       break;
      case 'areasView':
       content = <AreaView
       areas={this.state.areas || []}
       artists={this.state.artists || []}
       vendors={this.state.vendors || []}
       />
       break;
      case 'mainView':
       content = <MainList />;
       break;
      case 'loginView':
        content = <LoginView login={this.login} register={this.register}/>;
        break;
      case 'profileView':
        content = <ProfileView user={this.state.currentUser}/>;
        break;
      default:
       content = <MainList />;
}
    return (
      <div className="App">
        <header>
           <a><img src={ require('./images/codechella.png') } alt={'home'} onClick={() => this.setView('mainView')} /></a>
           <button onClick={() => this.setView('mapView')} className="navBtn">Map</button>
           <button onClick={() => this.setView('artistsView')} className="navBtn">Artists</button>
           <button onClick={() => this.setView('vendorsView')} className="navBtn">Vendors</button>
           <button onClick={() => this.setView('areasView')} className="navBtn">Areas</button>
           {this.state.user ?
             <button onClick={() => this.setView('profileView')} className="navBtn">Profile</button> :
             <button onClick={() => this.setView('loginView')} className="navBtn">Login/Register</button>
            }
        </header>
        { content }
      </div>
    );
  }
}

export default App;
