import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn, SignUp } from '@screens';
import { navOptionHandler } from '@utils/functions';

const StackAuth = createStackNavigator();
export default function AuthStack() {
  return (
    <StackAuth.Navigator initialRouteName="SignIn">
      <StackAuth.Screen name="SignIn" component={SignIn} options={navOptionHandler} />
      <StackAuth.Screen name="SignUp" component={SignUp} options={navOptionHandler} />
    </StackAuth.Navigator>
  )
}