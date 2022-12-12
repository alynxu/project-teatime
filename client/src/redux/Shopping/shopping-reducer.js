import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      name: "Iced Americano",
      category: "coffee",
      imageUrl: "https://i.ibb.co/qBnfjHy/icedamericado.png",
      price: 4.99,
      description: "Traditional Iced Americano is made by pouring cold water, over ice followed by shots of espresso.",
    },
    {
      id: 2,
      name: "Cold Brew",
      category: "coffee",
      imageUrl: "https://i.ibb.co/CBBCN0F/coldbrew.png",
      price: 4.99,
      description: "Cold brew is simply coffee that has been brewed with cold rather than hot water and usually involves a long steeping process—anywhere between 12-24 hours. In terms of flavor, cold brew is generally characterized as smooth, low-acid, and heavier than its hot brewed counterparts.",
    },
    {
      id: 3,
      name: "Iced Coffee",
      category: "coffee",
      imageUrl: "https://i.ibb.co/TtXYTHN/icedcoffee.png",
      price: 4.99,
      description: "Iced coffee is a coffee beverage served cold. It may be prepared either by brewing coffee normally and then serving it over ice or in cold milk or by brewing the coffee cold.",
    },
    {
      id: 4,
      name: "Iced Espresso",
      category: "coffee",
      imageUrl: "https://i.ibb.co/bb91Zj4/icedespresso.png",
      price: 4.99,
      description: "Iced espresso is espresso served over ice, often with milk. It's similar to iced coffee, but it uses espresso instead of brewed coffee.",
    },
    {
      id: 5,
      name: "Brown Sugar Milktea",
      category: "milktea",
      imageUrl: "https://i.ibb.co/1mVZ06N/brownsugarmilktea.png",
      price: 6.49,
      description: "This drink is made from 3 ingredients, tapioca pearls, caramelised brown sugar and milk. The original boba drink from Taiwan does not contain any tea and is caffeine-free.",
    },
    {
      id: 6,
      name: "Original Milktea",
      category: "milktea",
      imageUrl: "https://i.ibb.co/KxVjZMM/milktea.png",
      price: 6.49,
      description: "The most popular bubble tea drink is a classic milk tea (black tea, milk, sweetener, and pearls) which tastes sweet, creamy, and silky because of the milk, and has a nice chewy texture because of the tapioca pearls.",
    },
    {
      id: 7,
      name: "Taro Milktea",
      category: "milktea",
      imageUrl: "https://i.ibb.co/StTpJ6W/taromilktea.png",
      price: 6.49,
      description: "Taro milk tea (more specifically taro bubble tea) is a type of Taiwanese bubble tea made from a combination of taro root, milk, jasmine tea, and tapioca pearls.",
    },
    {
      id: 8,
      name: "Matcha Milktea",
      category: "milktea",
      imageUrl: "https://i.ibb.co/JkVvjM1/matchmilktea.png",
      price: 6.49,
      description: "Matcha milk tea is a refreshing drink made from Japanese green tea powder, hot water, and milk. You can also add a sweetener like honey if you prefer it sweeter. Tapioca pearls can be added to this drink and add a chewy texture.",
    },
    {
      id: 9,
      name: "Black Tea",
      category: "tea",
      imageUrl: "https://i.ibb.co/grdgQdM/blacktea.jpg",
      price: 5.99,
      description: "Black tea, also translated to red tea in various East Asian languages, is a type of tea that is more oxidized than oolong, yellow, white and green teas.",
    },
    {
      id: 10,
      name: "Green Tea",
      category: "tea",
      imageUrl: "https://i.ibb.co/grdgQdM/blacktea.jpg",
      price: 5.99,
      description: "Green tea is a type of tea that is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process which is used to make oolong teas and black teas.",
    },
    {
      id: 11,
      name: "Oolong Tea",
      category: "tea",
      imageUrl: "https://i.ibb.co/grdgQdM/blacktea.jpg",
      price: 5.99,
      description: "Oolong tea is made from the Camellia sinensis plant. Its dried leaves and leaf buds are used to make several different teas, including black and green teas. Oolong tea is fermented for longer than green tea, but less than black tea. It contains caffeine which affects thinking and alertness.",
    },
    {
      id: 12,
      name: "Fruit Tea",
      category: "tea",
      imageUrl: "https://i.ibb.co/JjxCzKV/fruittea.png",
      price: 5.99,
      description: "It is an infusion made from cut pieces of fruit and plants, which can either be fresh or dried. By definition in the guidelines of German food law, fruit tea is a tea-like beverage as it is not produced using the same traditional method as for green tea or black tea.",
    },
    {
      id: 13,
      name: "Banana Smoothie",
      category: "smoothies",
      imageUrl: "https://i.ibb.co/jGHZdNG/banana.png",
      price: 6.99,
      description: "A banana smoothie is a rich and creamy mixture of blended bananas and other simple ingredients—like other fresh fruits and milk.",
    },
    {
      id: 14,
      name: "Cucumber Smoothie",
      category: "smoothies",
      imageUrl: "https://i.ibb.co/4YZN9bj/cucumber.jpg",
      price: 6.99,
      description: "It's loaded with fiber, vitamins, and minerals and can be very hydrating, thanks to the high water content of cucumbers. The ingredients in this beverage also provide antioxidants, which can help fight cell damage that leads to aging and disease.",
    },
    {
      id: 15,
      name: "Strawberry Smoothie",
      category: "smoothies",
      imageUrl: "https://i.ibb.co/f4DkQ0j/strawberry.png",
      price: 6.99,
      description: "A strawberry smoothie is a great summertime drink and snack for kids and families. It is refreshing, delicious as well as a source of protein, fibre, vitamins and minerals.",
    },
    {
      id: 16,
      name: "Melon Smoothie",
      category: "smoothies",
      imageUrl: "https://i.ibb.co/3fQwnmV/melon.png",
      price: 6.99,
      description: "Cantaloupe and honeydew melon is blended with lime juice and sugar.",
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
