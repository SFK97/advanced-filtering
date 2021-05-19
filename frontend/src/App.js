import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TechnologyPage from "./pages/TechnologyPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={TechnologyPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
