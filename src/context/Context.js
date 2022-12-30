import React, { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
  /* const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  })); */

  const products = [
    {
      id: 1,
      name: "White keyboard",
      price: 20.0,
      image:
        "https://images.pexels.com/photos/1714205/pexels-photo-1714205.jpeg?auto=compress&cs=tinysrgb&w=600",
      inStock: 5,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: 2,
      name: "White Xbox Controller",
      price: 53.0,
      image:
        "https://images.pexels.com/photos/2106216/pexels-photo-2106216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      inStock: 3,
      fastDelivery: false,
      ratings: 5,
    },
    {
      id: 3,
      name: "Contemporary convenient computer",
      price: 167.0,
      image:
        "https://images.pexels.com/photos/6044824/pexels-photo-6044824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      inStock: 4,
      fastDelivery: true,
      ratings: 3,
    },
    {
      id: 4,
      name: "lighter keyboard",
      price: 55.0,
      image:
        "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      inStock: 0,
      fastDelivery: true,
      ratings: 2,
    },
    {
      id: 5,
      name: "Caattiilaa USB Microphone",
      price: 32.0,
      image:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/716-pTnlM5L._AC_UL480_FMwebp_QL65_.jpg",
      inStock: 9,
      fastDelivery: false,
      ratings: 1,
    },
    {
      id: 6,
      name: "Silver Iphone X",
      price: 399.0,
      image:
        "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      inStock: 0,
      fastDelivery: true,
      ratings: 3,
    },
    {
      id: 7,
      name: "playstation controller",
      price: 22.0,
      image:
        "https://images.pexels.com/photos/1346154/pexels-photo-1346154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      inStock: 5,
      fastDelivery: true,
      ratings: 1,
    },
    {
      id: 8,
      name: "White Airpod Case",
      price: 5.0,
      image:
        "https://images.pexels.com/photos/13060768/pexels-photo-13060768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      inStock: 5,
      fastDelivery: true,
      ratings: 3,
    },
    {
      id: 9,
      name: "White Earphones On Black Surface      ",
      price: 35.0,
      image:
        "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      inStock: 5,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: 10,
      name: "Modern keyboard on wooden desk near mouse",
      price: 42.0,
      image:
        "https://images.pexels.com/photos/4792732/pexels-photo-4792732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      inStock: 5,
      fastDelivery: true,
      ratings: 5,
    },
    {
      id: 11,
      name: "BONAOK Wireless Bluetooth Karaoke Microphone",
      price: 25.0,
      image:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/611e9XFZi+L._AC_UL480_FMwebp_QL65_.jpg",
      inStock: 0,
      fastDelivery: true,
      ratings: 3,
    },
    {
      id: 12,
      name: "PlayStation 4 Slim 500GB Console",
      price: 359.0,
      image:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51Ror8eNtTL._AC_UL480_FMwebp_QL65_.jpg",
      inStock: 5,
      fastDelivery: true,
      ratings: 2,
    },
    {
      id: 13,
      name: "Gaming Headset",
      price: 26.0,
      image:
        "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY327_QL65_.jpg",
      inStock: 5,
      fastDelivery: true,
      ratings: 1,
    },
    {
      id: 14,
      name: "Gray Iphone 6      ",
      price: 299.0,
      image:
        "https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      inStock: 5,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: 15,
      name: "PlayStation PS5 Console",
      price: 599.0,
      image:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61SUJDrCTLL._AC_UY327_FMwebp_QL65_.jpg",
      inStock: 5,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: 16,
      name: "Pink Gaming Headset",
      price: 19.0,
      image:
        "https://m.media-amazon.com/images/I/617dIM4rc4L._AC_UY327_QL65_.jpg",
      inStock: 5,
      fastDelivery: true,
      ratings: 5,
    },
    {
      id: 17,
      name: "lenovo 2022 Ideapad 3 Laptop",
      price: 788.0,
      image:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61QGMX0Qy6L._AC_UY327_FMwebp_QL65_.jpg",
      inStock: 5,
      fastDelivery: true,
      ratings: 5,
    },
    {
      id: 18,
      name: "Black Gaming Headset with Microphone",
      price: 20.0,
      image:
        "https://m.media-amazon.com/images/I/71nh1VxLzuL._AC_UY327_QL65_.jpg",
      inStock: 5,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: 19,
      name: "2021 HP Stream Laptop",
      price: 999.0,
      image:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41tzuaDZOPL._AC_UL480_FMwebp_QL65_.jpg",
      inStock: 5,
      fastDelivery: true,
      ratings: 3,
    },
    {
      id: 20,
      name: "Beats Studio Buds",
      price: 58.0,
      image:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51utxdpV8cS._AC_UY327_FMwebp_QL65_.jpg",
      inStock: 5,
      fastDelivery: true,
      ratings: 4,
    },
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

/*--- export my context using useContext ---*/
export const CartState = () => {
  return useContext(Cart);
};
