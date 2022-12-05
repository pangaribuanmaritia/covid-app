import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class SampleClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Hello World",
      name: "",
      dateOfBirth: "",
    };
    console.log(this)

    this.updateUserData = this.updateUserData.bind(this)
  }

  updateUserData() {
    const newData = {
      name: "Bunga Sukanya",
      dateOfBirth: "12-10-2022",
    };

    this.setState({
      name: newData.name,
      dateOfBirth: newData.dateOfBirth,
    });
  }

  render() {
    const { title, name, dateOfBirth } = this.state;

    return (
      <>
        <div>This is the title{title}</div>
        <>User Name : {name}</>
        <>User DOB : {dateOfBirth}</>
        <br />
        <Button onClick={() => this.updateUserData(this)}>Update User Data</Button>
      </>
    );
  }
}
