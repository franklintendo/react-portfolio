import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import About from '../src/components/About';
import Portfolio from '../src/components/Portfolio';
import Contact from '../src/components/Contact';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';



function App() {
  return (
    // process.env.PUBLIC_URL
    <HashRouter basename="/">
      <Header />
      <Switch>
        <Route path="/" children={<About />}/>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/contact" children={<Contact />}/>
        
      </Switch>
      <Footer />
    </HashRouter>

  );
}

export default App;
