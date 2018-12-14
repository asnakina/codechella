import React, { Component } from 'react';

import ArtistView from './components/artist/ArtistView';
import VendorView from './components/vendor/VendorView';
import AreaView from './components/area/AreaView';
import ProfileView from './components/profile/ProfileView';
import MainList from './components/main/MainList';
import LoginView from './components/login/LoginView';
import Footer from './components/footer/Footer';
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
    this.logout = this.logout.bind(this);
    this.register = this.register.bind(this);
    this.buildHeaders = this.buildHeaders.bind(this);
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.favoriteArtist = this.favoriteArtist.bind(this);
    this.favoriteVendor = this.favoriteVendor.bind(this);
    this.unfavoriteArtist = this.unfavoriteArtist.bind(this);
    this.unfavoriteVendor = this.unfavoriteVendor.bind(this);
    this.submitArtist = this.submitArtist.bind(this);
    this.submitVendor = this.submitVendor.bind(this);
    this.deleteArtist = this.deleteArtist.bind(this);
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
      console.error(e);
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

    const resp = await serv.registerUser(data);
    await this.setState({token: resp.token});
    await this.getCurrentUser();
    localStorage.setItem('token',resp.token);
    this.setView('profileView');
  }

  async favoriteArtist(e) {
    if (this.state.user) {
      let id = e.target.name;
      const headers = this.buildHeaders();
      const resp = await serv.favoriteArtist(id, headers);
      this.getCurrentUser();
    }
    else {
      this.setView('loginView');
    }
  }

  async favoriteVendor(e) {
    if (this.state.user) {
      let id = e.target.name;
      const headers = this.buildHeaders();
      const resp = await serv.favoriteVendor(id, headers);
      this.getCurrentUser();
    }
    else {
      this.setView('loginView');
    }
  }

  async unfavoriteArtist(e) {
    let id = e.target.name;
    const headers = this.buildHeaders();
    const resp = await serv.unfavoriteArtist(id, headers);
    this.getCurrentUser();
  }

  async unfavoriteVendor(e) {
    let id = e.target.name;
    const headers = this.buildHeaders();
    const resp = await serv.unfavoriteVendor(id, headers);
    this.getCurrentUser();
  }

  async submitArtist(data) {
    const headers = this.buildHeaders();
    data.created_by = this.state.user.id;
    const resp = await serv.postArtist(data, headers);
    await this.getArtists();
  }

  async submitVendor(data) {
    const headers = this.buildHeaders();
    data.created_by = this.state.user.id;
    const resp = await serv.postVendor(data, headers);
    await this.getVendors();
  }

  async deleteArtist(e) {
    let id = e.target.value;
    const headers = this.buildHeaders();
    const resp = await serv.removeArtist(id, headers);
    await this.getArtists();
  }


  async logout() {
    localStorage.removeItem('token');
    this.setView('mainView');
    await this.setState({
      token: '',
      user: ''
    });
  }

  render() {
    //switching between views
    let content;
    switch (this.state.screen) {
      case 'artistsView':
       content = <ArtistView
       creator={this.state.user.id}
       userArtists={this.state.user.artists || null}
       artists={this.state.artists || []}
       favoriteArtist={this.favoriteArtist}
       unfavoriteArtist={this.unfavoriteArtist}
       submit={this.submitArtist}
       delete={this.deleteArtist}/>;
       break;
      case 'vendorsView':
       content = <VendorView
       userVendors={this.state.user.vendors || null}
       vendors = {this.state.vendors || []}
       favoriteVendor={this.favoriteVendor}
       unfavoriteVendor={this.unfavoriteVendor}
       submit={this.submitVendor}/>;
       break;
      case 'areasView':
       content = <AreaView
       areas={this.state.areas || []}
       artists={this.state.artists || []}
       vendors={this.state.vendors || []}
       userArtists={this.state.user.artists || null}
       userVendors={this.state.user.vendors || null}
       favoriteArtist={this.favoriteArtist}
       unfavoriteArtist={this.unfavoriteArtist}
       favoriteVendor={this.favoriteVendor}
       unfavoriteVendor={this.unfavoriteVendor}
       />
       break;
      case 'mainView':
       content = <MainList />;
       break;
      case 'loginView':
        content = <LoginView login={this.login} register={this.register}/>;
        break;
      case 'profileView':
        content = <ProfileView
          user={this.state.user}
          artists={this.state.artists || []}
          vendors={this.state.vendors || []}
          userArtists={this.state.user.artists || null}
          userVendors={this.state.user.vendors || null}
          favoriteArtist={this.favoriteArtist}
          unfavoriteArtist={this.unfavoriteArtist}
          favoriteVendor={this.favoriteVendor}
          unfavoriteVendor={this.unfavoriteVendor}
          />;

        break;
      default:
       content = <MainList />;
}
    return (
      <div className="App">
        <header>
           <a><img src={ require('./images/codechella.png') } alt={'home'} onClick={() => this.setView('mainView')} /></a>
           <button onClick={() => this.setView('artistsView')} className="navBtn">Artists</button>
           <button onClick={() => this.setView('vendorsView')} className="navBtn">Vendors</button>
           <button onClick={() => this.setView('areasView')} className="navBtn">Areas</button>
           {this.state.user ?
             <button onClick={() => this.setView('profileView')} className="navBtn">Profile</button> :
             <button onClick={() => this.setView('loginView')} className="navBtnBigger">Login/Register</button>
            }
          {this.state.user ? <button onClick={this.logout} className="navBtn">Logout</button>
          : null}
        </header>
        { content }
        <Footer />
      </div>
    );
  }
}

export default App;
