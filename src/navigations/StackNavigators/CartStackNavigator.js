import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Cart, Shops3, Detail3 } from "@screens";

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
      <StactCart.Screen
        name="Shops3"
        component={Shops3}
        options={navOptionHandler}
      />
      <StactCart.Screen
        name="Detail3"
        component={Detail3}
        options={navOptionHandler}
      />
    </StactCart.Navigator>
  );
}
