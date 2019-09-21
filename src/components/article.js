import React from "react"
import styled from "@emotion/styled"
import cnn_image from "../assets/logo_cnn.png"
import nbc_image from "../assets/logo_nbc.png"
import wapo_image from "../assets/logo_washington post.png"
import ap_image from "../assets/logo_ap.png"
import fox_image from "../assets/logo_fox.png"

const getImage = publisher =>
  ({
    "CNN.com": cnn_image,
    "NBCNEWS.com": nbc_image,
    "The Washington Post": wapo_image,
    "Fox News": fox_image,
    "Associated Press Online": ap_image
  }[publisher])

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
  margin-top: 10px;
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
  flex: 1;
`

const Article = ({ image, title, url, time_stamp, publisher }) => {
  const [time_date] = time_stamp.split(" ")
  const [year, month, day] = time_date.split(":")
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }

  const date = new Date(Date.UTC(year, month, day, 3, 0, 0)).toLocaleDateString(
    "en-US",
    options
  )
  const publisherImage = getImage(publisher) || cnn_image
  return (
    <ArticleWrapper href={url}>
      <ArticleImage image={image} />
      <ArticleInfo>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleBottomRow>
          <ArticleMediaImage image={publisherImage} />
          <ArticleDate>{date}</ArticleDate>
        </ArticleBottomRow>
      </ArticleInfo>
    </ArticleWrapper>
  )
}

export default Article
