import React, { Component } from 'react';
import Artist from './components/Artist';
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
       content = <ArtistList />;
       break;
      case 'vendorsView':
       content = <VendorList />;
       break;
      case 'areasView':
       content = <AreaList />
       break;
      case 'mainView':
       content = <MainList />;
       break;
      case 'loginView':
       content = <LoginList />;
       break;
      default:
       content = <MainList />;
    }

    return (
      <div className="App">
        <h1>Codechella</h1>
         <Artist />
          <nav>
           <button onClick={() => this.setView('mapView')}>Map</button>
           <button onClick={() => this.setView('artistsView')}>Artists</button>
           <button onClick={() => this.setView('vendorsView')}>Vendors</button>
           <button onClick={() => this.setView('areasView')}>Areas</button>
           <button onClick={() => this.setView('mainView')}>Main</button>
           <button onClick={() => this.setView('loginView')}>Log in/Register</button>
          </nav>
         { content }
      </div>
    );
  }
}

export default App;
