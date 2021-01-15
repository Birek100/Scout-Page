import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Main from "./components/main/main.jsx";
import Links from "./components/links/links.jsx";
import Kontakt from "./components/kontakt/kontakt.jsx";
import Oboz from "./components/oboz/oboz.jsx";
import DoPobrania from "./components/dopobrania/dopobrania.jsx";
import Zuchy from "./components/zuchy/zuchy.jsx";
import Harcerze from "./components/harcerze/harcerze.jsx";
import StarsiHarcerze from "./components/starsiharcerze/starsiharcerze.jsx";
import Umundurowanie from "./components/umundurowanie/umundurowanie.jsx";
import Sprawnosci from "./components/sprawnosci/sprawnosci.jsx";
import Onas from "./components/onas/onas.jsx";
import Footer from "./components/footer/footer.jsx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Navbar />
          <Route exact path="/" component={Main} />
          <Route exact path="/kontakt" component={Kontakt} />
          <Route exact path="/oboz" component={Oboz} />
          <Route exact path="/dopobrania" component={DoPobrania} />
          <Route exact path="/zuchy" component={Zuchy} />
          <Route exact path="/harcerze" component={Harcerze} />
          <Route exact path="/starsiharcerze" component={StarsiHarcerze} />
          <Route exact path="/umundurowanie" component={Umundurowanie} />
          <Route exact path="/sprawnosci" component={Sprawnosci} />
          <Route exact path="/onas" component={Onas} />
          <Links />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
