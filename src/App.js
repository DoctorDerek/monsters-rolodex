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
        <CardList>
          {this.state.monsters.map((monster) => (
            <div key={monster.id}>{monster.name}</div>
          ))}
        </CardList>
      </div>
    )
  }
}
