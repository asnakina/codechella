import React, { Component } from 'react';
import './Nav.css';
import { Button } from 'reactstrap';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'mainView',
    }
  }
  setView = (view) => {
    this.setState({
      screen: view
    });
  }
render(){
  return (
    <header>
       <button onClick={() => this.setView('mainView')} className="navBtn">Main</button>
       <button onClick={() => this.setView('mapView')} className="navBtn">Map</button>
       <button onClick={() => this.setView('artistsView')} className="navBtn">Artists</button>
       <button onClick={() => this.setView('vendorsView')} className="navBtn">Vendors</button>
       <button onClick={() => this.setView('areasView')} className="navBtn">Areas</button>
    <Button bsStyle="success" className="lgnBtn" onClick={() => this.setView('loginView')}>Login/Register</Button>

    </header>
  )
}
}
