import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { React, Component } from "react";
import { counterActions } from "../store/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}> Increment </button>
        <button onClick={increaseHandler}> Increase By 10 </button>
        <button onClick={decrementHandler}> Decrement </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//*****************implementation of redux in class based component***************//
// class Counter extends Component {
//   incrementHandler() {
//     this.props.incrementcounter();
//   }

//   decrementHandler() {
//     this.props.decrementcounter();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>
//             {" "}
//             Increment{" "}
//           </button>
//           <button onClick={this.decrementHandler.bind(this)}>
//             {" "}
//             Decrement{" "}
//           </button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }
// const mapStateToProp = (state) => {
//   return { counter: state.counter };
// };

// const mapDispatchToProp = (dispatch) => {
//   return {
//     incrementcounter: () => {
//       dispatch({ type: "increment" });
//     },
//     decrementcounter: () => {
//       dispatch({ type: "decrement" });
//     },
//   };
// };

// export default connect(mapStateToProp, mapDispatchToProp)(Counter);
