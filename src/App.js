import React, { Component } from 'react';
import './App.css';
import Project from './components/Project'

class App extends Component {
  render() {
    return (
      <div id="page-main">
        <div id="container-wrap">
				<div id="lib-container" style={{width:"100%"}}>
					<Project></Project>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
