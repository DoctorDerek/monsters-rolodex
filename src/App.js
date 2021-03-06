import React, { Component } from "react"

import CardList from "./components/card-list/card-list.component.jsx"
import SearchBox from "./components/search-box/search-box.component.jsx"

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
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    )
    return (
      <div className="App">
        <h1>Class Component App with this.setState</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={(event) => {
            this.setState({ searchField: event.target.value }, () => {
              console.log(searchField)
            })
          }}
        ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    )
  }
}
