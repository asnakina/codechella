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
      areas: ''
    }
    this.getArtists = this.getArtists.bind(this);
    this.getVendors = this.getVendors.bind(this);
    this.getAreas = this.getAreas.bind(this);
  }

  setView = (view) => {
    this.setState({
      screen: view
    });
  }

  componentDidMount = async () => {
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
		this.state.loggedIn ?
		content = <ProfileView user={this.getCurrentUser()}/> :
       content = <LoginView />;
       break;
       case 'profileView':
        content = <ProfileView />;
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
           <Button bsstyle="success" className="lgnBtn" onClick={() => this.setView('loginView')}>Login/Register</Button>
          <Button bsstyle="success" className="lgnBtn" onClick={() => this.setView('profileView')}>Profile</Button>
        </header>
        { content }
      </div>
    );
  }
}

export default App;
