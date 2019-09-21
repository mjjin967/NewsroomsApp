import React from "react"
import styled from "@emotion/styled"
import cnn_image from "../assets/logo_cnn.png"

const ArticleImage = styled.div`
  background: grey;
  background-image: url("${props => props.image}");
  background-size: cover;
  border-radius: 10px;
  width: 100px;
  height: 100px;
  flex-shrink: 0;
`

const ArticleWrapper = styled.a`
  display: flex;
  flex-direction: row;
  color: black;
  text-decoration: none;
  align-items: flex-end;
`

const ArticleTitle = styled.h2`
  font-size: 12px;
`

const ArticleBottomRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

const ArticleDate = styled.p`
  font-size: 8px;
`

const ArticleMediaImage = styled.div`
  height: 20px;
  max-width: 90px;
  flex: 1;
  background-image: url("${props => props.image}");
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
`

const ArticleInfo = styled.div`
  padding: 0 12px;
`

const Article = ({ image, title, url, time_stamp, publisher }) => {
  return (
    <ArticleWrapper href={url}>
      <ArticleImage image={image} />
      <ArticleInfo>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleBottomRow>
          <ArticleMediaImage image={cnn_image} />
          <ArticleDate>{time_stamp}</ArticleDate>
        </ArticleBottomRow>
      </ArticleInfo>
    </ArticleWrapper>
  )
}

export default Article
