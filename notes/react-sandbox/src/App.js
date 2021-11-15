import React from 'react'
import { HomePage, CatalogPage, CheckoutPage, DetailPage, LoginPage, RegisterPage, CartPage } from "./pages"
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        {/* <Route path="/" exact component={HomePage} /> */}
        <Route path="/" exact render={props => <HomePage {...props} /> } />
        {/* <Route path="/register" exact component={RegisterPage} /> */}
        <Route path="/register" exact render={props => {
          if (localStorage.getItem('dataLogin')) {
            return <Redirect to="/" />
          } else {
            return <RegisterPage {...props}/>
          }
        }} />
        {/* <Route path="/login" exact component={LoginPage} /> */}
        <Route path="/login" exact render={props => {
          if (localStorage.getItem('dataLogin')) {
            return <Redirect to="/" />
          } else {
            return <LoginPage {...props} />
          }
        }} />
        {/* <Route path="/catalogs" exact component={CatalogPage} /> */}
        <Route path="/catalogs" exact render={(props) => <CatalogPage {...props} />} />
        {/* <Route path="/checkout" exact component={CheckoutPage} /> */}
        <Route path="/checkout" exact render={(props) => {
          if (localStorage.getItem('dataLogin')) {
            return <CheckoutPage {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}/>
        <Route path="/cart" exact render={(props) => {
          if (localStorage.getItem('dataLogin')) {
            return <CartPage {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}/> 
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
