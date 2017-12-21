import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import BaseHeader from './Components/BaseHeader.js';
import HomePage from './Components/HomePage.js';
import AboutPage from './Components/AboutPage.js';
import VideoPage from './Components/VideoPage.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <BaseHeader/>
          
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/videos" component={VideoPage} />
        </div>
      </Router>
    );
  }
}

export default App;
