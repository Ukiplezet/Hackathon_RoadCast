import React from "react";
import UserProfile from "./UserProfile";
import SavedPodcasts from "./SavedPodcasts";
import Settings from "./Settings";
import Discover from "./Discover";
import FriendsList from "./FriendsList";
import { Switch, Route, Redirect } from "react-router-dom";
import CenterContent from "./ListeningNow";
import Map from "./Map";
import Home from "./Home";

function Routes() {
  return (
    <Switch>
      <Route exact path="/userprofile" component={UserProfile} />
      <Route exact path="/map" component={Map} />
      <Route exact path="/listeningnow" component={CenterContent} />
      <Route exact path="/friendslist" component={FriendsList} />
      <Route exact path="/discover" component={Discover} />
      <Route exact path="/savedpodcasts" component={SavedPodcasts} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/" component={Home} />
      <Redirect push to={Home} />
    </Switch>
  );
}

export default Routes;
