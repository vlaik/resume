import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import AboutMe from './AboutMe/AboutMe';
import Home from './Home/Home';
import MySkills from './Skills/MySkills'

function App(){
    return(
      <ParallaxProvider>
        <Router>

        <Switch>
          <Route path='/skills'>
            <SkillsPage/>
          </Route>
          <Route path="/aboutme">
            <ThisMe />
          </Route>
          <Route path="/">
            <Homes />
          </Route>
        </Switch>
      
    </Router>
    </ParallaxProvider>
    )
}

function Homes() {
    return <Home/>;
  }
  
  function ThisMe() {
    return  <AboutMe/>;
  }

  function SkillsPage() {
    return <MySkills/>
  }

export default App;