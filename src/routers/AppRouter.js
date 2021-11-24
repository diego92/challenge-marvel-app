import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ContainerApp from "../components/ContainerApp";
import { HeroDetail } from "../pages/hero/HeroDetail";
import { HeroList } from "../pages/hero/HeroList";

export const AppRouter = () => {
  return (
    <Router>
      <ContainerApp>
        <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route component={HeroDetail} exact path="/heroes/:heroId" />
            <Route component={HeroList} path="/heroes" />
            <Redirect to="/heroes" />
          </Switch>
        </div>
      </ContainerApp>
    </Router>
  );
};
