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
import NotFound from './Components/NotFound';
import SchedulePage from './Components/SchedulePage';


class App extends Component {
  render() {
    return (
      <Router>
        <div className='Site'>
          <BaseHeader />
          <div className="Site-content">
            <Switch>
              {/* {We have to link to evergreen-waste-web-app here because of github pages navigation and react router not quite working right or something like that, 
              see https://github.com/rafrex/spa-github-pages to fix with a workaround some other post detailed}  CHANGE BACK AFTER MOVING TO A REAL HOST!!!!!!!!!!!!!!!!*/}
              <Route exact path="/evergreen-waste-web-app" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/schedule" component={SchedulePage} />
              {/*This not found bit is broke*/}
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
