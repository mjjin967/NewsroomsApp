import React from "react"
import data from "../data/data.json"

const StoryBlock = ({ match }) => {
  const {
    params: { highlight: highlightId, storyblock: id }
  } = match
  const storyblock = data[highlightId][id]
  return (
    <div>
      <h1>
        hello StoryBlock {highlightId} {id}
      </h1>
    </div>
  )
}

export default StoryBlock
