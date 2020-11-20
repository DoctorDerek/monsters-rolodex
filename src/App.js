import React, { Component } from "react"

import CardList from "./components/card-list/card-list.component.jsx"

import "./App.css"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monsters: [],
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
  }

  render() {
    return (
      <div className="App">
        <h1>Class Component App with this.setState</h1>
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    )
  }
}
