import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
// stylesheet
import "./assets/styles.css"
// page for route
import MateriTwo from "./page/materi";
// eslint-disable-next-line react-hooks/rules-of-hooks
export default class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      useActivenav: "materiOne",
    }
  }
  render() {
    return (
      <Router>
        <div className="container">
          <div className="navbar">
            <ul className="ulNavbar">
              <li><Link to={"/materitwo"} className={this.state.useActivenav == "materiTwo" ? "active li-Nav" : "li-Nav"} onClick={() => this.setState({ useActivenav: "materiTwo" })}>Tugas Materi Kedua</Link></li>
            </ul>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/materitwo" component={MateriTwo} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
