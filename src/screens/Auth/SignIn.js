import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated
} from "react-native";
import { Container, Header, Body, Content } from 'native-base';
import { TextField } from 'react-native-material-textfield';


import auth from '@react-native-firebase/auth';
import appleAuth, {
  AppleButton,
  AppleAuthRequestScope,
  AppleAuthRequestOperation,
} from '@invertase/react-native-apple-authentication';
import { LoginButton, LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-community/google-signin';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { setUser } from "@modules/auth/actions";
import { Loading } from "@components";
import { isEmpty, validateEmail, validateLength } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

GoogleSignin.configure({
  webClientId: '806846085890-9c4p5gem9bj3rcp8qci28gf22bc7k4ip.apps.googleusercontent.com',
});

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      validate: false,
      email: '',
      errorEmail: '',
      password: '',
      errorPassword: '',
      secureTextEntry: true
    };
  }

  async onAppleButtonPress() {
    // Start the sign-in request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: AppleAuthRequestOperation.LOGIN,
      requestedScopes: [AppleAuthRequestScope.EMAIL, AppleAuthRequestScope.FULL_NAME],
    });

    // Ensure Apple returned a user identityToken
    if (!appleAuthRequestResponse.identityToken) {
      throw 'Apple Sign-In failed - no identify token returned';
    }

    // Create a Firebase credential from the response
    const { identityToken, nonce } = appleAuthRequestResponse;
    const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);

    // Sign the user in with the credential
    return auth().signInWithCredential(appleCredential);
  }

  async onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  async onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  onChangeEmail(email) {
    this.setState({ email }, () => {
      if (isEmpty(email)) {
        this.setState({ errorEmail: 'Hold up, this field is required', validate: false });
      } else {
        if (validateEmail(email)) {
          this.setState({ errorEmail: '' }, () => {
            isEmpty(this.state.errorEmail) && !isEmpty(this.state.email) && isEmpty(this.state.errorPassword) && !isEmpty(this.state.password) && this.setState({ validate: true });
          });
        } else {
          this.setState({ errorEmail: 'Oh no! Please enter a valid email.', validate: false });
        }
      }
    })
  }

  onChangePassword(password) {
    this.setState({ password }, () => {
      if (isEmpty(password)) {
        this.setState({ errorPassword: 'Hold up, this field is required', validate: false });
      } else {
        if (validateLength(password, 8)) {
          this.setState({ errorPassword: '' }, () => {
            isEmpty(this.state.errorEmail) && !isEmpty(this.state.email) && isEmpty(this.state.errorPassword) && !isEmpty(this.state.password) && this.setState({ validate: true });
          });
        } else {
          this.setState({ errorPassword: 'Hold up, this field requires at least 8 characters.', validate: false });
        }
      }
    })
  }
  onSignin() {
    this.props.setUser({
      email: this.state.email,
      password: this.state.password
    })
    this.props.navigation.pop()
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Loading loading={this.state.loading} />
        <View>
          <Image style={{ width: '100%', height: '100%', marginTop: 30 }} source={images.logoDefault} />
          <View style={styles.mask} />
          <View style={styles.main}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 50 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 25, height: 25 }} source={images.logoDefault} />
                <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: 'bold', color: '#404553' }}>Paksa</Text>
              </View>
              <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                <Icon name="close" type="antdesign" size={25} color="#404553" />
              </TouchableOpacity>
            </View>
            <Text style={{ marginTop: 40, width: '100%', fontSize: 30, fontWeight: 'bold', color: '#404553' }}>Hala! Welcome back!</Text>
            <View style={{ marginTop: 50, width: '100%', height: 80 }}>
              <TextField
                label='Email'
                value={this.state.email}
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                returnKeyType='next'
                enablesReturnKeyAutomatically={true}
                containerStyle={{ width: '100%' }}
                error={this.state.errorEmail}
                onChangeText={(data) => this.onChangeEmail(data)}
              />
            </View>
            <View style={{ width: '100%', height: 80 }}>
              <TextField
                label='Password'
                value={this.state.password}
                secureTextEntry={this.state.secureTextEntry}
                autoCapitalize='none'
                autoCorrect={false}
                returnKeyType='done'
                enablesReturnKeyAutomatically={true}
                clearTextOnFocus={true}
                renderRightAccessory={() => {
                  let name = this.state.secureTextEntry ? 'visibility' : 'visibility-off';
                  return (
                    <Icon name={name} type='material' size={24} color={TextField.defaultProps.baseColor}
                      onPress={() => this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }))} />
                  )
                }}
                containerStyle={{ width: '100%' }}
                error={this.state.errorPassword}
                onChangeText={(data) => this.onChangePassword(data)}
              />
            </View>
            <TouchableOpacity style={{ marginTop: 20, width: '100%' }} onPress={()=>this.props.navigation.navigate('Forgot')}>
              <Text style={{ fontSize: 16 }}>Forgot your password?</Text>
            </TouchableOpacity>
            {this.state.validate ?
              <TouchableOpacity style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center', width: '100%', height: 50, backgroundColor: '#3866DF', borderRadius: 3 }} onPress={()=>this.onSignin()}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: colors.WHITE }}>Sign In</Text>
              </TouchableOpacity>
              :
              <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center', width: '100%', height: 50, backgroundColor: '#E3E6F0', borderRadius: 3 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: colors.WHITE }}>Sign In</Text>
              </View>
            }
            <View style={{ flexDirection: 'row', width: '100%', marginTop: 20 }}>
              <Text style={{ fontSize: 16 }}>Don't have account?</Text>
              <TouchableOpacity style={{ width: '100%' }} onPress={()=>this.props.navigation.navigate('SignUp')}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}> Sign Up </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mask: {
    position: 'absolute',
    top: 0, left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: colors.WHITE,
    opacity: 0.9
  },
  main: {
    position: 'absolute',
    top: 0, left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    padding: 40
  }
});

const mapDispatchToProps = dispatch => {
  return {
    setUser: (data) => {
      dispatch(setUser(data))
    }
  }
}

export default connect(undefined, mapDispatchToProps)(SignIn);
