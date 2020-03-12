import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from '../src/components/About';
import Portfolio from '../src/components/Portfolio';
import Contact from '../src/components/Contact';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';



function App() {
  return (

    <BrowserRouter basename="/react-portfolio/">
      <Header />
        
        <Route exact path="/react-portfolio/portfolio">
            <Portfolio />
        </Route>
        <Route exact path="/react-portfolio/contact">
            <Contact />
        </Route>
        <Route exact path="/react-portfolio/">
            <About />
        </Route>
      
      <Footer />
    </BrowserRouter>

  );
}

export default App;
