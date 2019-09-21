import React from "react"
import styled from "@emotion/styled"
import Article from "../components/article"
import data from "../data/data.json"

const ArticleWrapper = styled.div`
  & > * {
    margin-bottom: 24px;
  }
`

const Highlight = ({ match }) => {
  const {
    params: { highlight }
  } = match
  const storyblocks = data[highlight]

  return (
    <ArticleWrapper>
      {storyblocks.map(article => (
        <Article {...article} key={article.id} />
      ))}
    </ArticleWrapper>
  )
}

export default Highlight
