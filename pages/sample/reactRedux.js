import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../redux/action/user_action";
import Link from "next/link";

class App extends Component {
  changeReducerState() {
    this.props.dispatch(
      updateUser({
        nama: "ANTHONY",
        umur: 20,
        alamat: "MALANG",
      })
    );
  }

  render() {
    return (
      <>
        <div>
          <p>nama: {this.props.userReducer.nama}</p>
          <p>umur: {this.props.userReducer.umur}</p>
          <p>alamat: {this.props.userReducer.alamat}</p>
        </div>
        <br />
        <button
          onClick={() => {
            this.changeReducerState();
          }}
        >
          GANTI STATE REDUX
        </button>
        <br />
        <Link href="/sample/readStore">Go to next page</Link>

      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userReducer: state.userReducer,
});

export default connect(mapStateToProps)(App);
