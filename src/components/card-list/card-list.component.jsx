import React from "react"

import "./card-list.styles.css"

import Card from "../card/card.component"

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card monster={monster}></Card>
      ))}
    </div>
  )
}

export default CardList
