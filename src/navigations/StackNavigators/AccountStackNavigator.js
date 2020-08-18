import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Account } from "@screens";

import { navOptionHandler } from "@utils/functions";

const StactAccount = createStackNavigator();
export default function AccountStack() {
  return (
    <StactAccount.Navigator initialRouteName="Account">
      <StactAccount.Screen
        name="Account"
        component={Account}
        options={navOptionHandler}
      />
    </StactAccount.Navigator>
  );
}
