import React from "react";
import { ThemeProvider } from "styled-components";
import { Reset } from 'styled-reset';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import theme from "./theme";
import Home from "./pages/Home";

const App = () => {

  return(
    <ThemeProvider theme={theme}>
      <Reset />
      <Router>
        <Switch>
          <Route path='/home'>
              <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );

}

export default App;
