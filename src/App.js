import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Reset } from 'styled-reset';
import { BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom';

import store from "./redux/store";
import theme from "./theme";
import Home from "./pages/Home";
import Root from "./pages/Root";
import ViewBook from "./pages/ViewBook"

const App = () => {
  
  return(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset />
        <Router>
          <Switch>

            <Route path='/' component={Root} exact/>

            <Route path='/home/:languages' component={Home}/>

            <Route path='/read/:languages/:idbook' component={ViewBook}/>

          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );

}

function Child() {
  var { id } = useParams();
  return id;
}

export default App;
