import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const SpotlightWrapper = styled.a`
    background: #000a2b;
    background-image: url("${props => props.image}");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    display: inline-block;
    width: 100%;
    min-height: 200px;
    position: relative;
    text-decoration: none;
    color: white;
`

const ArticleCount = styled.div`
  position: absolute;
  top: 10px;
  left: 12px;
  font-size: 30px;
`

const ArticleTitle = styled.div`
  position: absolute;
  text-align: right;
  font-size: 16px;
  bottom: 10px;
  left: 0;
  right: 10px;
`

const Spotlight = ({ spotlight, id }) => {
  let filtered = Object.assign({}, ...spotlight)
  const count = spotlight.length
  const { title, image } = filtered

  return (
    <SpotlightWrapper image={image} href={`/${id}`}>
      <ArticleCount>{`${count} articles`}</ArticleCount>
      <ArticleTitle>{title}</ArticleTitle>
    </SpotlightWrapper>
  )
}

export default Spotlight
