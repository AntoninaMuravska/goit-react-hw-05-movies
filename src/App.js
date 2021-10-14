import { Switch, Route } from 'react-router';
import AppBar from './components/AppBar';
import HomePageView from './views/HomePageView';
import MoviesPageView from './views/MoviesPageView';
import Container from './components/Container';
import NotFoundView from './views/NotFoundView';

import './App.css';

function App() {
  return (
    <>
      <AppBar />
      <Container>
        <Switch>
          <Route exact path="/">
            <HomePageView />
          </Route>
          <Route path="/movies">
            <MoviesPageView />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
