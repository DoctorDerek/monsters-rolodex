import React, { useState, useEffect } from "react"

import CardList from "./components/card-list/card-list.function-component.jsx"

import "./App.css"

const App = () => {
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, [])

  return (
    <div className="App">
      <CardList monsters={monsters}></CardList>
    </div>
  )
}

export default App
