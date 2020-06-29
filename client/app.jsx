import React, { Component } from 'react';
import Header from './components/header/header.jsx'
import Navbar from './components/navbar/navbar.jsx'

class App extends Component {
    render() {
        return (
          <div className="app">
            <Header />
            <Navbar />
          </div>
          );
        }
      }
 export default App;
 