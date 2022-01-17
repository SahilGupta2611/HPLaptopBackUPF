//steps for adding Redux in application
//1. Create store
//2. Create reducer method to mutate/update the state
//3. pass the reducer method as an argument of createStore method.
//4. export store
//5. Then bind the root component inside provider component by importing it from react-redux .
//6. Pass that exported store as an props in provider component.
//7. Then use useSelector hook to get the data .. UseSelector takes anonymous function as args
//    and that function takes store object as an args so in this way we can get the data.
//8. use useDispatch method to dispatch any action.. useDispatch method return function and that function
//    takes action object as an args where we can define type of action like below
// Example for useDispatch
// const dispatch  = useDispatch();
// const buttonClickHandler = (){
//  dispatch({ type: "increment" });
//}

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import AuthReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: AuthReducer },
});

export default store;

//**********Old Way of Creating store(using Redux) without using redux toolkit.*************//
//import { createStore } from "redux";
// const counterReducer = (state = intialState, action) => {
//   if (action.type == "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type == "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

//const store = createStore(counterReducer);
//export defualt store
