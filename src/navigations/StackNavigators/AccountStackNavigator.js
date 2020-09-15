import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Account, Orders, Returns, Request, Credit, Address, Payment, Claims, ClaimsAdd, Profile } from "@screens";

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
      <StactAccount.Screen
        name="Address"
        component={Address}
        options={navOptionHandler}
      />
      <StactAccount.Screen
        name="Payment"
        component={Payment}
        options={navOptionHandler}
      />
      <StactAccount.Screen
        name="Claims"
        component={Claims}
        options={navOptionHandler}
      />
      <StactAccount.Screen
        name="ClaimsAdd"
        component={ClaimsAdd}
        options={navOptionHandler}
      />
      <StactAccount.Screen
        name="Profile"
        component={Profile}
        options={navOptionHandler}
      />
    </StactAccount.Navigator>
  );
}
