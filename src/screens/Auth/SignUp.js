import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { Container, Header, Body, Content } from 'native-base';
import { TextField } from 'react-native-material-textfield';

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

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      validate: false,
      firstname: '',
      errorFirstname: '',
      lastname: '',
      errorLastname: '',
      email: '',
      errorEmail: '',
      password: '',
      errorPassword: '',
      secureTextEntry: true
    };
  }

  onChangeFirstName(firstname) {
    this.setState({ firstname }, () => {
      if (isEmpty(firstname)) {
        this.setState({ errorFirstname: 'Hold up, this field is required', validate: false });
      } else {
        this.setState({ errorFirstname: '' }, () => {
          !isEmpty(this.state.firstname) && isEmpty(this.state.errorFirstname) && 
          !isEmpty(this.state.lastname) && isEmpty(this.state.errorLastname) && 
          !isEmpty(this.state.email) && isEmpty(this.state.errorEmail) &&
          !isEmpty(this.state.password) && isEmpty(this.state.errorPassword) && this.setState({ validate: true });
        });
      }
    })
  }

  onChangeLastName(lastname) {
    this.setState({ lastname }, () => {
      if (isEmpty(lastname)) {
        this.setState({ errorLastname: 'Hold up, this field is required', validate: false });
      } else {
        this.setState({ errorLastname: '' }, () => {
          !isEmpty(this.state.firstname) && isEmpty(this.state.errorFirstname) && 
          !isEmpty(this.state.lastname) && isEmpty(this.state.errorLastname) && 
          !isEmpty(this.state.email) && isEmpty(this.state.errorEmail) &&
          !isEmpty(this.state.password) && isEmpty(this.state.errorPassword) && this.setState({ validate: true });
        });
      }
    })
  }

  onChangeEmail(email) {
    this.setState({ email }, () => {
      if (isEmpty(email)) {
        this.setState({ errorEmail: 'Hold up, this field is required', validate: false });
      } else {
        if (validateEmail(email)) {
          this.setState({ errorEmail: '' }, () => {
            !isEmpty(this.state.firstname) && isEmpty(this.state.errorFirstname) && 
            !isEmpty(this.state.lastname) && isEmpty(this.state.errorLastname) && 
            !isEmpty(this.state.email) && isEmpty(this.state.errorEmail) &&
            !isEmpty(this.state.password) && isEmpty(this.state.errorPassword) && this.setState({ validate: true });
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
            !isEmpty(this.state.firstname) && isEmpty(this.state.errorFirstname) && 
            !isEmpty(this.state.lastname) && isEmpty(this.state.errorLastname) && 
            !isEmpty(this.state.email) && isEmpty(this.state.errorEmail) &&
            !isEmpty(this.state.password) && isEmpty(this.state.errorPassword) && this.setState({ validate: true });
          });
        } else {
          this.setState({ errorPassword: 'Hold up, this field requires at least 8 characters.', validate: false });
        }
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Loading loading={this.state.loading} />
        <View>
          <Image style={{ width: '100%', height: '100%', marginTop: 30 }} source={images.logoDefault} />
          <View style={styles.mask} />
          <ScrollView style={styles.main}>
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
                label='First Name'
                value={this.state.firstname}
                keyboardType='default'
                // autoCapitalize='none'
                autoCorrect={false}
                returnKeyType='next'
                enablesReturnKeyAutomatically={true}
                containerStyle={{ width: '100%' }}
                error={this.state.errorFirstname}
                onChangeText={(data) => this.onChangeFirstName(data)}
              />
            </View>
            <View style={{ width: '100%', height: 80 }}>
              <TextField
                label='Last Name'
                value={this.state.lastname}
                keyboardType='default'
                // autoCapitalize='none'
                autoCorrect={false}
                returnKeyType='next'
                enablesReturnKeyAutomatically={true}
                containerStyle={{ width: '100%' }}
                error={this.state.errorLastname}
                onChangeText={(data) => this.onChangeLastName(data)}
              />
            </View>
            <View style={{ width: '100%', height: 80 }}>
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
            <TouchableOpacity style={{ marginTop: 20, width: '100%' }}>
              <Text style={{ fontSize: 16 }}>Forgot your password?</Text>
            </TouchableOpacity>
            {this.state.validate ?
              <TouchableOpacity style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center', width: '100%', height: 50, backgroundColor: '#3866DF', borderRadius: 3 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: colors.WHITE }}>Sign Up</Text>
              </TouchableOpacity>
              :
              <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center', width: '100%', height: 50, backgroundColor: '#E3E6F0', borderRadius: 3 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: colors.WHITE }}>Sign Up</Text>
              </View>
            }
            <View style={{ flexDirection: 'row', width: '100%', marginTop: 20 }}>
              <Text style={{ fontSize: 16 }}>Already have an account?</Text>
              <TouchableOpacity style={{ width: '100%' }} onPress={()=>this.props.navigation.navigate('SignIn')}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}> Sign In </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
    // alignItems: 'center',
    padding: 40
  }
});

export default connect(undefined, undefined)(SignUp);
