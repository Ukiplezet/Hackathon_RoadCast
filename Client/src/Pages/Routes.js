import React, { useContext, useEffect } from "react";
import { UserContext } from "../Context/AuthContext";
import { Switch, Route, Redirect } from "react-router-dom";

import UserProfile from "./UserProfile";
import SavedPodcasts from "./SavedPodcasts";
import Settings from "./Settings";
import Discover from "./Discover";
import FriendsList from "./FriendsList";
import CenterContent from "./ListeningNow";
import Map from "./Map";
import Home from "./Home";
import Layout from "../Layout/Layout";

function Routes() {
  const { user } = useContext(UserContext);
  if (user.auth) {
    return (
      <Layout>
        <Switch>
          <Route exact path="/map/:loggedId" component={Map} />
          <Route exact path="/:loggedId" component={Home} />
          <Route exact path="/userprofile/:loggedId" component={UserProfile} />
          <Route
            exact
            path="/listeningnow/:loggedId"
            component={CenterContent}
          />
          <Route exact path="/friendslist/:loggedId" component={FriendsList} />
          <Route exact path="/discover/:loggedId" component={Discover} />
          <Route
            exact
            path="/savedpodcasts/:loggedId"
            component={SavedPodcasts}
          />
          <Route exact path="/settings/:loggedId" component={Settings} />
          {/* <Redirect push to={Home} /> */}
        </Switch>
      </Layout>
    );
  } else if (!user.auth) {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Redirect push to={Home} /> */}
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
