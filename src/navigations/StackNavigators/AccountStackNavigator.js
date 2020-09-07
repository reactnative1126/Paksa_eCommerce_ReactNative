import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Account, Orders, Returns, Request, Credit } from "@screens";

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
      <StactAccount.Screen
        name="Orders"
        component={Orders}
        options={navOptionHandler}
      />
      <StactAccount.Screen
        name="Returns"
        component={Returns}
        options={navOptionHandler}
      />
      <StactAccount.Screen
        name="Request"
        component={Request}
        options={navOptionHandler}
      />
      <StactAccount.Screen
        name="Credit"
        component={Credit}
        options={navOptionHandler}
      />
    </StactAccount.Navigator>
  );
}
