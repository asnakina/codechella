import React, { Component } from 'react';
import './Nav.css';
import { Button } from 'reactstrap';
import ArtistView from './artistcomponents/ArtistView';
import VendorView from './vendorcomponents/VendorView';
import AreaView from './areacomponents/AreaView.js';
import MainList from './maincomponents/MainList';
import MapList from './mapcomponents/MapList';
import LoginView from './logincomponents/LoginView';
import RegisterView from './logincomponents/RegisterView';

class Nav extends Component {
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
render(){
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
     content = <AreaView areas={this.state.areas || []} />
     break;
    case 'mainView':
     content = <MainList />;
     break;
    case 'loginView':
     content = <LoginView />;
     break;

    default:
     content = <MainList />;
  }
  return (
    <div>
    <header>
       <button onClick={() => this.setView('mainView')} className="navBtn">Main</button>
       <button onClick={() => this.setView('mapView')} className="navBtn">Map</button>
       <button onClick={() => this.setView('artistsView')} className="navBtn">Artists</button>
       <button onClick={() => this.setView('vendorsView')} className="navBtn">Vendors</button>
       <button onClick={() => this.setView('areasView')} className="navBtn">Areas</button>
    <Button bsstyle="success" className="lgnBtn" onClick={() => this.setView('loginView')}>Login/Register</Button>

    </header>
    { content }
    </div>
  )
}
}
export default Nav;
