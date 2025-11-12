import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      progress: 0
    }
  }
  setProgress = (progre) =>{
    this.setState({progress:progre})
  }
  render() {
    return (
       <BrowserRouter>
       <Navbar/>
        <LoadingBar
        height={3}
        color="#f11946"
        progress={this.state.progress}
      />
        <Routes>
          <Route path="/" element={<News progress={this.setProgress} category="top"/>}/>
          <Route path="/business" element={<News progress={this.setProgress} category="business"/>} />
          <Route path="/crime" element={<News progress={this.setProgress} category="crime"/>} />
          <Route path="/education" element={<News progress={this.setProgress} category="education"/>} />
          <Route path="/entertainment" element={<News progress={this.setProgress} category="entertainment"/>} />
          <Route path="/health" element={<News progress={this.setProgress} category="health"/>} />
          <Route path="/politics" element={<News progress={this.setProgress} category="politics"/>} />
          <Route path="/sports" element={<News progress={this.setProgress} category="sports"/>} />
          <Route path="/technology" element={<News progress={this.setProgress} category="technology"/>} />
          <Route path="/tourism" element={<News progress={this.setProgress} category="tourism"/>} />
        </Routes>
      </BrowserRouter>

    )
  }
}


