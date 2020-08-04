import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import SearchPage from './Components/screens/SearchPage';
import DetailPage from './Components/screens/DetailPage';
import Header from './Components/templates/Header';
import Footer from './Components/templates/Footer';
import Container from "./Components/atoms/Container";

export default function App() {
  return (
  <Router>
    <Redirect from="/" to="/searcher" />
    <Container flexD="column" bgColor="black" width="100%" height="100%">
      <Header></Header>
      <Container width="100%" height="85%">
        <Switch>
          <Route  path="/searcher">
            <SearchPage/>
          </Route>
          <Route path="/detail/:id">
            <DetailPage />
          </Route>
        </Switch>
      </Container>
      <Footer></Footer>
    </Container>
  </Router>
  );
}