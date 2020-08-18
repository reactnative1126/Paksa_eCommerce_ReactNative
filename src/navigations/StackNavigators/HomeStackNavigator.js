import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "@screens";

import { navOptionHandler } from "@utils/functions";

const StactHome = createStackNavigator();
export default function HomeStack() {
  return (
    <StactHome.Navigator initialRouteName="Home">
      <StactHome.Screen
        name="Home"
        component={Home}
        options={navOptionHandler}
      />
    </StactHome.Navigator>
  );
}
