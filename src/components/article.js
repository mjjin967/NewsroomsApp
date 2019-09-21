import React from "react"
import "./article.css"

const Article = ({ image, title, url }) => {
  console.log("image", image)
  console.log("title", title)
  console.log("url", url)
  return (
    <article className="article">
      <div src={image} className="article-image" />
      <h1>hello article</h1>
    </article>
  )
}

export default Article
