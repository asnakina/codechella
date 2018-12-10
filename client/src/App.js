import React, { Component } from 'react';
import ArtistList from './components/ArtistList';
import './App.css';
import serv from './services/apiservices.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: '',
      artists: '',
      vendors: '',
      areas: ''
    }
    this.getArtists = this.getArtists.bind(this);
    this.getVendors = this.getVendors.bind(this);
    this.getAreas = this.getAreas.bind(this);
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

  // async getVendor() {
  //   try {
  //     const vendor = await serv.getVendor();
  //     this.setState(vendor);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  render() {
    return (
      <div className="App">
        <h1>Codechella</h1>
        <ArtistList artists={this.state.artists || []} />
      </div>
    );
  }
}

export default App;
