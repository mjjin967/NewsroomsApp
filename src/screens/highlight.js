import React from "react"
import Article from "../components/article"
import data from "../data/data.json"

const Highlight = ({ match }) => {
  const {
    params: { highlight }
  } = match
  const storyblocks = data[highlight]

  return (
    <div>
      <h1>hello Highlight {highlight}</h1>
      {storyblocks.map(article => (
        <Article {...article} key={article.id} />
      ))}
    </div>
  )
}

export default Highlight
