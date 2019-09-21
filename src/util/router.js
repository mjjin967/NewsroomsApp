import React from "react"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
import Home from "../screens/home"
import Highlights from "../screens/highlight"
import StoryBlock from "../screens/story-block"

const Router = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute path="/:highlight/:storyblock" component={StoryBlock} />
      <PublicRoute path="/:highlight" component={Highlights} />
      <PublicRoute path="/home" component={Home} />
      <PublicRoute component={NoMatch} />
    </Switch>
  </BrowserRouter>
)

const PublicRoute = ({ component: Component, otherProps, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} {...otherProps} />} />
)

const NoMatch = () => (
  <Redirect
    to={{
      pathname: "/home"
    }}
  />
)

export default Router
