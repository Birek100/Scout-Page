import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/header/header.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Content from './components/content/content.jsx'
import Links from './components/links/links.jsx'
import Kontakt from './components/kontakt/kontakt.jsx'

class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <div className="app">
              <Header />
              <Navbar />
              <Route exact path="/" component={Content} /> 
              <Route exact path="/kontakt" component={Kontakt} />
              
              <Links />
            </div>
          </BrowserRouter>
          );
        }
      }
 export default App;
 