import React, { Component } from "react"
import { BrowserRouter as Route, Switch, Redirect } from "react-router-dom"
import Index from "./components/index"
import AboutPage from "./components/about"
import WhatWeCanDo from "./components/what-we-can-do"
import Contact from "./components/contact"
import News from "./components/news-and-events"

class App extends Component {
  render() {
    return (
      <Route>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/about-us" component={AboutPage} />
          <Route exact path="/what-we-do" component={WhatWeCanDo} />
          <Route exact path="/news-and-events" component={News} />
          <Route exact path="/contact-us" component={Contact} />
          <Redirect to="/" component={Index} />
        </Switch>
      </Route>
    )
  }
}

export default App
