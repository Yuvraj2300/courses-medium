import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CoursesList from './components/CourseList'

class App extends Component {
  render() {
    return(
      <div>
        <NavBar />
        <CoursesList />
      </div>
    )
  }
}

export default App