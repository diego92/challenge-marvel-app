import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { HeroDetail } from "../pages/hero/HeroDetail";
import { HeroList } from "../pages/hero/HeroList";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route component={HeroList} path="/heroes" />
          <Route component={HeroDetail} exact path="/heroes/:heroId" />
          <Redirect to="/heroes" />
        </Switch>
      </div>
    </Router>
  );
};
