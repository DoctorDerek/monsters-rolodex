import React, { useState, useEffect } from "react"

import CardList from "./components/card-list/card-list.component.jsx"
import SearchBox from "./components/search-box/search-box.component.jsx"

import "./App.css"

const App = () => {
  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState("")

  // The empty array as a second argument makes useEffect
  // run only one time, when the page loads, equivalent
  // to the componentDidMount() lifecycle method.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(() => users))
  }, [])

  // Runs every time the component re-renders, creating
  // an effect similar to passing in a callback function
  // as the second argument to this.setState() in a class.
  useEffect(() => {
    console.log(searchField)
  })

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
  )

  return (
    <div className="App">
      <h1>Function Component App with React Hooks</h1>
      <SearchBox
        placeholder="search monsters"
        handleChange={(event) => setSearchField(() => event.target.value)}
      ></SearchBox>
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  )
}

export default App
