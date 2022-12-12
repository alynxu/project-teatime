import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./views/homepage/index";
import Menu from "./views/MenuPage/Menu";
import Contact from "./views/ContactPage/Contact";
import Profile from "./views/ProfilePage/Profile";
import Orders from "./views/OrdersPage/Orders";
import OrderCompleted from "./views/OrderCompletedPage/OrderCompleted";
import Rewards from "./views/RewardsPage/Rewards";
import Favorites from "./views/FavoritesPage/Favorites";
import Coffee from "../src/components/CategoryPages/Coffee";
import Milktea from "../src/components/CategoryPages/Milktea";
import Tea from "../src/components/CategoryPages/Tea";
import Smoothies from "../src/components/CategoryPages/Smoothies";
import ShoppingCart from "../src/views/CartPage/ShoppingCart";
import Details from "./views/ProductDetails/Details";
import Search from "./views/SearchPage/Search";
import OrderDetail from "./views/OrderDetailPage/OrderDetail";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
import {
  updateCart,
  updateFavorite,
} from "./redux/Shopping/shopping-actions";
import axios from "axios";
initFontAwesome();

const App = ({ cart, updateCart, favoriteItems, updateFavorite }) => {
  const { user } = useAuth0();
  const { isLoading, error } = useAuth0();

  //getting cartItems from api and updating the cart
  useEffect(() => {
    const fetchCartItems = async () => {
      if (!user) return;
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/shoppingcart`,
        {
          params: {
            userId: user?.sub.split("|")[1],
          },
        }
      );
      const cartItems = response.data.response?.cartItems || [];
      updateCart(cartItems);
    };
    fetchCartItems();
  }, [user]);

  //update cartItems to the backend everytime the cart changes
  useEffect(() => {
    const updateCartItems = async () => {
      if (!user) return;
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/shoppingcart`,
        {
          cartItems: cart,
          userId: user?.sub.split("|")[1],
        }
      );
      console.log("response", response.data);
    };
    updateCartItems();
  }, [cart]);

  //getting favoriteItems from api and updating the favorites
  useEffect(() => {
    const fetchFavoriteItems = async () => {
      if (!user) return;
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/favorites`,
        {
          params: {
            userId: user?.sub.split("|")[1],
          },
        }
      );
      const favoriteItems = response.data.response?.items || [];
      updateFavorite(favoriteItems);
    };
    fetchFavoriteItems();
  }, [user]);

  //saving favoriteItems to database everytime the favorites changes
  useEffect(() => {
    const updateFavoriteItems = async () => {
      if (!user) return;
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/favorites`,
        {
          items: favoriteItems,
          userId: user?.sub.split("|")[1],
        }
      );
      console.log("response", response.data);
    };
    updateFavoriteItems();
  }, [favoriteItems]);

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
            <Route path="/order/completed" component={OrderCompleted} />
            <Route path="/order/:orderNumber" component={OrderDetail} />
            <Route path="/rewards" component={Rewards} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/categories/coffee" component={Coffee} />
            <Route path="/categories/milktea" component={Milktea} />
            <Route path="/categories/tea" component={Tea} />
            <Route path="/categories/smoothies" component={Smoothies} />
            <Route path="/shoppingcart" component={ShoppingCart} />
            <Route path="/products/:id" component={Details} />
            <Route path="/search/:name" component={Search} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    favoriteItems: state.shop.favoriteItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCart: (id) => dispatch(updateCart(id)),
    updateFavorite: (id) => dispatch(updateFavorite(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
