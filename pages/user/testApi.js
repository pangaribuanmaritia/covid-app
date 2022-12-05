import React, { Component } from "react";
import axios from "axios";
import PersonList from "./PersonList";
import { Button } from "react-bootstrap";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      personList: [],
    };
  }

  componentDidMount() {
    this.getPersonList();
  }

  getPersonList = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(data);
    this.setState({ personList: data });
  };

  addNewUser = async () => {
    const res = axios.post(`https://jsonplaceholder.typicode.com/users`, {
      user: { name: "Winda", username: "winda", email: "winda@gmail.com" },
    });
    this.setState({
      personList: [
        ...this.state.personList,
        {
          id: res.data.id,
          name: res.data.user.name,
          username: res.data.user.username,
          email: res.data.user.email,
        },
      ],
    });
  };

  deletePerson = async (id) => {
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    console.log(res.data);
  };

  render() {
    return (
      <>
        <Button onClick={this.addNewUser}>Add New user</Button>
        <PersonList
          personList={this.state.personList}
          deletePerson={(id) => {
            this.deletePerson(id);
          }}
        />
      </>
    );
  }
}
