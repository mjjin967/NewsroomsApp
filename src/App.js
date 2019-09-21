import React from "react"
import { Global, css } from "@emotion/core"
import Router from "./util/router"

function App() {
  return (
    <div className="App">
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css?family=Libre+Franklin&display=swap");
          * {
            font-family: "Libre Franklin", sans-serif;
          }
        `}
      />
      <Router />
    </div>
  )
}

export default App
