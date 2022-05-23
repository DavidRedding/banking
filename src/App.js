import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
