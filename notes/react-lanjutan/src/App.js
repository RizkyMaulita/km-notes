import './assets/css/style.css'
// import AboutPage from './pages/About.jsx';
// import HomePage from './pages/Home.jsx';
// import ProfilePage from './pages/Profile.jsx';
import { HomePage, AboutPage, ProfilePage } from './pages'
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Switch>
      {/* Cara penulisan 1 */}
      <Route path="/" exact component={HomePage} /> 

      {/* Cara penulisan 2 */}
      <Route path="/about" exact>
        <AboutPage />
      </Route>
      
      <Route path="/profile" exact>
        <ProfilePage />
      </Route>
      
      <Route>
        <div>404 Not Found</div>
      </Route>
    </Switch>
  );
}

export default App;
