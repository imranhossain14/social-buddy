import React from 'react';
import './App.css';
import Main from './Main/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Component/NoMatch/NoMatch';
import PostDetail from './Component/PostDetatail/PostDetail';



function App() {
  return (
    <div>
      
      <Router>
          <Switch>
          <Route exact path="/">
                  <Main />
          </Route>
         <Route exact path="/posts/:postId">
            <PostDetail/>
          </Route>
          <Route  path="*">
                  <NoMatch></NoMatch>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
