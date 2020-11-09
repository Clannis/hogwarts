import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsContainer from "../containers/HogsContainer";
import { Route } from 'react-router-dom'
import HogPage from "./HogPage";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path='/' render={() => <HogsContainer hogs={hogs} />} />
        <Route path='/hogs/:hog_name' render={(routerProps) => <HogPage {...routerProps} hogs={hogs}/>}/>
      </div>
    );
  }
}

export default App;
