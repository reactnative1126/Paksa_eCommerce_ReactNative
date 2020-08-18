import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Categories } from "@screens";

import { navOptionHandler } from "@utils/functions";

const StactCategories = createStackNavigator();
export default function CategoriesStack() {
  return (
    <StactCategories.Navigator initialRouteName="Categories">
      <StactCategories.Screen
        name="Categories"
        component={Categories}
        options={navOptionHandler}
      />
    </StactCategories.Navigator>
  );
}
