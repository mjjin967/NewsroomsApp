import React from "react"
import styled from "@emotion/styled"
import data from "../data/data.json"
import Spotlight from "../components/spotlight"

const HomeWrapperStyes = styled.div`
  padding: 10px 10px;
  & > * {
    margin-bottom: 24px;
  }
`

const Home = () => {
  return (
    <HomeWrapperStyes>
      {Object.keys(data).map(spotlight => (
        <Spotlight key={spotlight} id={spotlight} spotlight={data[spotlight]} />
      ))}
    </HomeWrapperStyes>
  )
}

export default Home
