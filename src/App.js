import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import Home from "./pages/HomePage";
import Space from "./pages/SpacePage";
import MySpace from "./pages/MySpacePage";
import EditMySpace from "./pages/EditMySpace";
import NewStory from "./pages/NewStoryForm";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import { Jumbotron } from "react-bootstrap";

// const Home = () => (
//   <Jumbotron>
//     <h1>Home</h1>
//   </Jumbotron>
// );
const Other = () => (
  <Jumbotron>
    <h1>Other</h1>
  </Jumbotron>
);

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/space/me" component={MySpace} />
        <Route exact path="/space/me/edit" component={EditMySpace} />
        <Route exact path="/space/me/newStory" component={NewStory} />
        <Route path="/space/:id" component={Space} />
        <Route path="/other" component={Other} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
