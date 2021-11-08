import { HomePage, CatalogPage, CheckoutPage, DetailPage, LoginPage, RegisterPage } from "./pages"
import { Switch, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/catalogs" exact component={CatalogPage} />
        <Route path="/checkout" exact component={CheckoutPage} />
        <Route path="/detail/:id" exact component={DetailPage} />
        <Route>
          <div className="container my-4">
            <h1 className="text-center"> 404 Page Not Found </h1>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
