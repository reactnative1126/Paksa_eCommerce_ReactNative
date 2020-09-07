import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Categories, Shops1, Detail1 } from "@screens";

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
      <StactCategories.Screen
        name="Shops1"
        component={Shops1}
        options={navOptionHandler}
      />
      <StactCategories.Screen
        name="Detail1"
        component={Detail1}
        options={navOptionHandler}
      />
    </StactCategories.Navigator>
  );
}
