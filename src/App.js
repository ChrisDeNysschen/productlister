import React, { Fragment } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Galleries from "./components/Galleries";
import Abouts from "./components/Abouts";

const galleryProds = [
  {
    key: 0,
    name: "JavaScript",
    experience: "10",
    time: "years",
    imgUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png",
  },
  {
    key: 1,
    name: "HTML",
    experience: "10",
    time: "years",
    imgUrl:
      "https://cdn.pixabay.com/photo/2016/11/19/22/25/html5-1841458_1280.png",
  },
  {
    key: 2,
    name: "CSS",
    experience: "10",
    time: "years",
    imgUrl:
      "https://cdn.pixabay.com/photo/2016/11/19/23/00/css3-1841590_1280.png",
  },
  {
    key: 3,
    name: "ReactJS",
    experience: "1",
    time: "year",
    imgUrl:
      "https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png",
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/Gallery"
              render={(props) => (
                <Fragment>
                  <Galleries prods={galleryProds} />
                </Fragment>
              )}
            />
            <Route
              exact
              path="/abouts"
              render={() => (
                <Fragment>
                  <Abouts />
                </Fragment>
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
