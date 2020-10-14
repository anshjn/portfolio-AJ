import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header/header';
import Hero from './Components/Hero/hero';
import About from './Components/About/about';
import Skills from './Components/Skills/skills';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
        <div className="hero">
          <Header />
          <Hero />
          
        </div>
        <About/>
        <Skills />
      </div>
     );
  }
}
 
export default App;

