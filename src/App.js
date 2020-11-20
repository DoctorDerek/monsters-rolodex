import React, { Component } from "react"

import CardList from "./components/card-list/card-list.component.jsx"

import "./App.css"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monsters: [],
      searchField: "",
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
        <input
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            this.setState({ searchField: event.target.value }, () => {
              console.log(this.state.searchField)
            })
          }}
        />
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    )
  }
}
