import React from "react";
import UserProfile from "./UserProfile";
import SavedPodcasts from "./SavedPodcasts";
import Settings from "./Settings";
import Discover from "./Discover";
import FriendsList from "./FriendsList";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import CenterContent from "../Components/MainContent/CenterContent";

function Routes() {
  return (
    <Switch>
      <Route exact path="/userprofile" component={UserProfile} />
      <Route exact path="/friendslist" component={FriendsList} />
      <Route exact path="/discover" component={Discover} />
      <Route exact path="/savedpodcasts" component={SavedPodcasts} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/" component={CenterContent} />
      <Redirect push to={CenterContent} />
    </Switch>
  );
}

export default Routes;
