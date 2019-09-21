import React from "react"
import data from "../data/data.json"
import Spotlight from "../components/spotlight";

const Home = () => {
  return (
    <div>
      {Object.keys(data).map(spotlight => <Spotlight key={spotlight} spotlight={data[spotlight]} />)}
    </div>
  )
}

export default Home
