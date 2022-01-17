import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { authActions } from "./store/auth";
import { useDispatch, useSelector } from "react-redux";
import { PureComponent } from "react";
import Test from "./components/test";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Test />
      <Counter />
    </Fragment>
  );
}

export default App;
