import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Deals, Shops2, Detail2 } from "@screens";

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
      <StactDeals.Screen
        name="Shops2"
        component={Shops2}
        options={navOptionHandler}
      />
      <StactDeals.Screen
        name="Detail2"
        component={Detail2}
        options={navOptionHandler}
      />
    </StactDeals.Navigator>
  );
}
