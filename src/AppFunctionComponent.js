import React, { useState, useEffect } from "react"

import CardList from "./components/card-list/card-list.function-component.jsx"

import "./App.css"

const App = () => {
  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState("")

  // The empty array as a second argument makes useEffect
  // run only one time, when the page loads, equivalent
  // to the ComponentDidMount() lifecycle method.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(() => users))
  }, [])

  useEffect(() => {
    console.log(searchField)
  })

  return (
    <div className="App">
      <h1>Function Component App with React Hooks</h1>
      <input
        type="search"
        onChange={(event) =>
          setSearchField(() => {
            return event.target.value
          })
        }
      />
      <CardList monsters={monsters}></CardList>
    </div>
  )
}

export default App
