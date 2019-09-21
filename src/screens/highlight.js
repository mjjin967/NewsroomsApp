import React from "react"
import data from "../data/data.json"

const Highlight = ({ match }) => {
  const {
    params: { highlight: id }
  } = match
  const highlight = data[id]
  return (
    <div>
      <h1>hello Highlight {id}</h1>
    </div>
  )
}

export default Highlight
