import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Cart } from "@screens";

import { navOptionHandler } from "@utils/functions";

const StactCart = createStackNavigator();
export default function CartStack() {
  return (
    <StactCart.Navigator initialRouteName="Cart">
      <StactCart.Screen
        name="Cart"
        component={Cart}
        options={navOptionHandler}
      />
    </StactCart.Navigator>
  );
}
