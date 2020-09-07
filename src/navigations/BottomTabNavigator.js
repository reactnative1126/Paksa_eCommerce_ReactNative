import React from "react";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";

import HomeStack from "./StackNavigators/HomeStackNavigator";
import CategoriesStack from "./StackNavigators/CategoriesStackNavigator";
import DealsStack from "./StackNavigators/DealsStackNavigator";
import AccountStack from "./StackNavigators/AccountStackNavigator";
import CartStack from "./StackNavigators/CartStackNavigator";

import { colors } from "@constants/themes";

const Tab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home"
      activeColor={colors.YELLOW.PRIMARY}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarVisible: true,
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <View style={{ width: 35, height: 35, paddingTop: 5 }}>
              <Icon
                name={focused ? "home" : "home-outline"}
                type="material-community"
                size={30}
                color={focused ? colors.YELLOW.PRIMARY : colors.GREY.DEFAULT}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesStack}
        options={{
          tabBarVisible: true,
          tabBarLabel: "Categories",
          tabBarIcon: ({ focused }) => (
            <View style={{ width: 35, height: 35, paddingTop: 5 }}>
              <Icon
                name={focused ? "cards" : "cards-outline"}
                type="material-community"
                size={30}
                color={focused ? colors.YELLOW.PRIMARY : colors.GREY.DEFAULT}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Deals"
        component={DealsStack}
        options={{
          tabBarVisible: true,
          tabBarLabel: "Deals",
          tabBarIcon: ({ focused }) => (
            <View style={{ width: 35, height: 35, paddingTop: 5 }}>
              <Icon
                name={focused ? "brightness-percent" : "brightness-percent"}
                type="material-community"
                size={30}
                color={focused ? colors.YELLOW.PRIMARY : colors.GREY.DEFAULT}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStack}
        options={{
          tabBarVisible: true,
          tabBarLabel: "My Account",
          tabBarIcon: ({ focused }) => (
            <View style={{ width: 35, height: 35, paddingTop: 5 }}>
              <Icon
                name={focused ? "account" : "account-outline"}
                type="material-community"
                size={30}
                color={focused ? colors.YELLOW.PRIMARY : colors.GREY.DEFAULT}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{
          tabBarVisible: true,
          tabBarLabel: "Cart",
          tabBarBadge: 1,
          tabBarIcon: ({ focused }) => (
            <View style={{ width: 35, height: 35, paddingTop: 5 }}>
              <Icon
                name={focused ? "cart" : "cart-outline"}
                type="material-community"
                size={30}
                color={focused ? colors.YELLOW.PRIMARY : colors.GREY.DEFAULT}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    right: -10,
    top: 5,
    backgroundColor: "red",
    borderRadius: 7.5,
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
});
