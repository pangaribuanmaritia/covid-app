import React, { Component } from 'react';
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <p>nama: {this.props.userReducer.nama}</p>
        <p>umur: {this.props.userReducer.umur}</p>
        <p>alamat: {this.props.userReducer.alamat}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userReducer: state.userReducer
});

export default connect(mapStateToProps)(App);
