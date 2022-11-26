import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./views/homepage/index";
import Menu from "./views/MenuPage/Menu"
import Contact from "./views/ContactPage/Contact"
import Profile from "./views/ProfilePage/Profile";
import Orders from "./views/OrdersPage/Orders"
import Rewards from "./views/RewardsPage/Rewards"
import Favorites from "./views/FavoritesPage/Favorites"
import Coffee from "../src/components/CategoryPages/Coffee"
import Milktea from "../src/components/CategoryPages/Milktea"
import Tea from "../src/components/CategoryPages/Tea"
import Smoothies from "../src/components/CategoryPages/Smoothies"
import ShoppingCart from "../src/views/CartPage/ShoppingCart"
import Details from "./views/ProductDetails/Details";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/profile" component={Profile} />
            <Route path="/orders" component={Orders} />
            <Route path="/rewards" component={Rewards} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/categories/coffee" component={Coffee}/>
            <Route path="/categories/milktea" component={Milktea}/>
            <Route path="/categories/tea" component={Tea}/>
            <Route path="/categories/smoothies" component={Smoothies}/>
            <Route path="/shoppingcart" component={ShoppingCart}/>
            <Route path="/products/2" component={Details}/>
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
