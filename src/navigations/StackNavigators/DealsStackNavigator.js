import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Deals } from "@screens";

import { navOptionHandler } from "@utils/functions";

const StactDeals = createStackNavigator();
export default function DealsStack() {
  return (
    <StactDeals.Navigator initialRouteName="Deals">
      <StactDeals.Screen
        name="Deals"
        component={Deals}
        options={navOptionHandler}
      />
    </StactDeals.Navigator>
  );
}
