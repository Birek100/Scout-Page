import React from "react";
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
import Druzyny from "./components/subnav/druzyny.jsx";
import DlaHarcerzy from "./components/subnav/dlaharcerzy.jsx";
import DlaRodzicow from "./components/subnav/dlarodzicow.jsx";
import Podatku from "./components/podatku/podatku.jsx";
import Wedrownicy from "./components/wedrownicy/wedrownicy.jsx";
import Post1 from "./components/posts/post1.jsx";
import Post2 from "./components/posts/post2.jsx";
import Post3 from "./components/posts/post3.jsx";
import Post4 from "./components/posts/post4.jsx";
import Post5 from "./components/posts/post5.jsx";
import Post6 from "./components/posts/post6.jsx";
import Post7 from "./components/posts/post7.jsx";
import Post8 from "./components/posts/post8.jsx";

import Post9 from "./components/posts/post9.jsx";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
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
        <Route exact path="/druzyny" component={Druzyny} />
        <Route exact path="/dlaharcerzy" component={DlaHarcerzy} />
        <Route exact path="/dlarodzicow" component={DlaRodzicow} />
        <Route exact path="/podatku" component={Podatku} />
        <Route exact path="/wedrownicy" component={Wedrownicy} />
        <Route exact path="/post1" component={Post1} />
        <Route exact path="/post2" component={Post2} />
        <Route exact path="/post3" component={Post3} />
        <Route exact path="/post4" component={Post4} />
        <Route exact path="/post5" component={Post5} />
        <Route exact path="/post6" component={Post6} />
        <Route exact path="/post7" component={Post7} />
        <Route exact path="/post8" component={Post8} />
        <Route exact path="/post9" component={Post9} />
        <Links />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
