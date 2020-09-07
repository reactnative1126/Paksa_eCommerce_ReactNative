import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { 
  SignIn, SignUp, Forgot, Search, Filters
} from '@screens';
import BottomTabNavigator from '@navigations/BottomTabNavigator';
import { navOptionHandler } from '@utils/functions';

const StackApp = createStackNavigator();
class AppContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <StackApp.Navigator mode="modal" initialRouteName={"App"}>
          <StackApp.Screen name="SignIn" component={SignIn} options={navOptionHandler} />
          <StackApp.Screen name="SignUp" component={SignUp} options={navOptionHandler} />
          <StackApp.Screen name="Forgot" component={Forgot} options={navOptionHandler} />
          <StackApp.Screen name="App" component={BottomTabNavigator} options={navOptionHandler} />
          <StackApp.Screen name="Search" component={Search} options={navOptionHandler} />
          <StackApp.Screen name="Filters" component={Filters} options={navOptionHandler} />
        </StackApp.Navigator>
      </NavigationContainer>
    );
  }
}
export default AppContainer;
