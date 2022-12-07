import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      name: "Iced Americano",
      category: "coffee",
      imageUrl: "https://i.ibb.co/qBnfjHy/icedamericado.png",
      price: 5.99,
      description: "Detail of product description will be added later.",
    },
    {
      id: 2,
      name: "Cold Brew",
      category: "coffee",
      imageUrl: "https://i.ibb.co/CBBCN0F/coldbrew.png",
      price: 5.99,
      description: "Detail of product description will be added later.",
    },
    {
      id: 3,
      name: "Iced Coffee",
      category: "coffee",
      imageUrl: "https://i.ibb.co/TtXYTHN/icedcoffee.png",
      price: 5.99,
      description: "Detail of product description will be added later.",
    },
    {
      id: 4,
      name: "Iced Espresso",
      category: "coffee",
      imageUrl: "https://i.ibb.co/bb91Zj4/icedespresso.png",
      price: 5.99,
      description: "Detail of product description will be added later.",
    },
    {
      id: 5,
      name: "Brown Sugar Milktea",
      category: "milktea",
      imageUrl: "https://i.ibb.co/1mVZ06N/brownsugarmilktea.png",
      price: 5.99,
      description: "Detail of product description will be added later.",
    },
    {
      id: 6,
      name: "Original Milktea",
      category: "milktea",
      imageUrl: "https://i.ibb.co/d5c9bMC/originalmilktea.png",
      price: 5.99,
      description: "Detail of product description will be added later.",
    },
    {
      id: 7,
      name: "Taro Milktea",
      category: "milktea",
      imageUrl: "https://i.ibb.co/StTpJ6W/taromilktea.png",
      price: 5.99,
      description: "Detail of product description will be added later.",
    },
    {
      id: 8,
      name: "Matcha Milktea",
      category: "milktea",
      imageUrl: "https://i.ibb.co/JkVvjM1/matchmilktea.png",
      price: 5.99,
      description: "Detail of product description will be added later.",
    },
    {
      id: 9,
      name: "Black Tea",
      category: "tea",
      imageUrl: "https://i.ibb.co/grdgQdM/blacktea.jpg",
      price: 5.99,
      description: "Detail of product description will be added later.",
    },
    {
      id: 10,
      name: "Green Tea",
      category: "tea",
      imageUrl: "https://i.ibb.co/grdgQdM/blacktea.jpg",
      price: 5.99,
      description: "Detail of product description will be added later.",
    },
    {
      id: 11,
      name: "Oolong Tea",
      category: "tea",
      imageUrl: "https://i.ibb.co/grdgQdM/blacktea.jpg",
      price: 5.99,
      description: "Detail of product description will be added later.",
    },
    {
      id: 12,
      name: "Fruit Tea",
      category: "tea",
      imageUrl: "https://i.ibb.co/JjxCzKV/fruittea.png",
      price: 5.99,
      description: "Detail of product description will be added later.",
    },
    {
      id: 13,
      name: "Strawberry Smoothie",
      category: "smoothies",
      imageUrl: "https://i.ibb.co/f4DkQ0j/strawberry.png",
      price: 5.99,
      description: "Detail of product description will be added later.",
    },
    {
      id: 14,
      name: "Banana Smoothie",
      category: "smoothies",
      imageUrl: "https://i.ibb.co/f4DkQ0j/strawberry.png",
      price: 5.99,
      description: "Detail of product description will be added later.",
    },
    {
      id: 15,
      name: "Cucumber Smoothie",
      category: "smoothies",
      imageUrl: "https://i.ibb.co/f4DkQ0j/strawberry.png",
      price: 5.99,
      description: "Detail of product description will be added later.",
    },
    {
      id: 16,
      name: "Melon Smoothie",
      category: "smoothies",
      imageUrl: "https://i.ibb.co/f4DkQ0j/strawberry.png",
      price: 5.99,
      description: "Detail of product description will be added later.",
    },
  ],
  favoriteItems: [],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    case actionTypes.UPDATE_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case actionTypes.EMPTY_CART:
      return {
        ...state,
        cart: [],
      };
    case actionTypes.ADD_TO_FAVORITE:
      // get Item data from products array
      const itemFavorite = state.products.find(
        (product) => product.id === action.payload.id
      );
      return {
        ...state,
        favoriteItems: [...state.favoriteItems, itemFavorite],
      };
    case actionTypes.REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favoriteItems: state.favoriteItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case actionTypes.UPDATE_FAVORITE:
      return {
        ...state,
        favoriteItems: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
