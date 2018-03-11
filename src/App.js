import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import BaseHeader from './Components/BaseHeader.js';
import BaseFooter from './Components/BaseFooter';
import HomePage from './Components/HomePage.js';
import AboutPage from './Components/AboutPage.js';
import VideoPage from './Components/VideoPage.js';
import NotFound from './Components/NotFound';


class App extends Component {
  render() {
    return (
      <Router>
        <div className='Site'>
          <BaseHeader />
          <div className="Site-content">
            <Switch>
              {/* {We have to link to aquilae-website here because of github pages navigation and react router not quite working right or something like that, 
              see https://github.com/rafrex/spa-github-pages to fix with a workaround some other post detailed}  CHANGE BACK AFTER MOVING TO A REAL HOST!!!!!!!!!!!!!!!!*/}
              <Route exact path="/aquilae-website" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/videos" component={VideoPage} />
              <Route component='NotFound' />
            </Switch>
          </div>
          <BaseFooter />
        </div>
      </Router>
    );
  }
}

export default App;
