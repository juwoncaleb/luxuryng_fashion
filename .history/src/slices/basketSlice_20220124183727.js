import { createSlice } from "@reduxjs/toolkit";
import Items from "../app/Items";

const initialState = {
  items: [],
};


export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {


      state.items = [...state.items, action.payload]
  

    },
    removeFromBasket: (state, action)=>{
      const index = state.items.findIndex(
        basketItem => basketItem.id === action.payload.id
      );
      let newBasket = [...state.items];
      if(index >= 0){
        newBasket.splice(index , 1)
      }else {
        console.warn("ikg")
      }
      state.items = newBasket;

    },

    // removeFromBasket:(state, action) =>{
    //   let newBasket = state.items.filter(({id}) => id != action.payload.id);

    // }
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total, item) =>
  total + item.price, 0);

export default basketSlice.reducer;
