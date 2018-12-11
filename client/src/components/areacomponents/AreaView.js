// import React, { Component } from 'react';
// // import AreaList from './AreaList';
// import serv from './services/apiservices.js';
//
// export default class AreaView extends Component {
//   constructor(props) {
//      super(props);
//      this.state = {
//        screen: 'areasView',
//        areas: '',
//        artists: '',
//        vendors: ''
//      }
//      this.getAreas = this.getAreas.bind(this);
//      this.getArtists = this.getArtists.bind(this);
//      this.getVendors = this.getVendors.bind(this);
//    }
//
//    setView = (view) => {
//      this.setState({
//        screen: view
//      });
//    }
//
//    componentDidMount = async () => {
//      await this.getAreas();
//      await this.getArtists();
//      await this.getVendors();
//    }
//
//    async getAreas() {
//      try {
//        const areas = await serv.getAreas();
//        this.setState({areas});
//      } catch (e) {
//        console.error(e);
//      }
//    }
//
//    async getArtist() {
//      try {
//        const artist = await serv.getArtist();
//        this.setState({artist});
//      } catch (e) {
//        console.error(e);
//      }
//    }
//
//    async getVendor() {
//      try {
//        const vendor = await serv.getVendor();
//        this.setState(vendor);
//      } catch (e) {
//        console.error(e);
//      }
//    }
//
//   render() {
//     return (
//       <div className="AreaView">
//         <h3>AreaView</h3>
//         <Area1 onClick = {this.state.areas} />
//       </div>
//     )
//   }
// }
