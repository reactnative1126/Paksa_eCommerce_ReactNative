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

class Forgot extends Component {
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

  onChangeEmail(email) {
    this.setState({ email }, () => {
      if (isEmpty(email)) {
        this.setState({ errorEmail: 'Hold up, this field is required', validate: false });
      } else {
        if (validateEmail(email)) {
          this.setState({ errorEmail: '' }, () => {
            isEmpty(this.state.errorEmail) && !isEmpty(this.state.email) && this.setState({ validate: true });
          });
        } else {
          this.setState({ errorEmail: 'Oh no! Please enter a valid email.', validate: false });
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
            <Text style={{ marginTop: 40, width: '100%', fontSize: 30, fontWeight: 'bold', color: '#404553' }}>Forgot your password?</Text>
            <Text style={{ marginTop: 40, width: '100%', fontSize: 14, color: '#404553' }}>Enter your email address and we'll send you a link to reset your password</Text>
            <View style={{ marginTop: 20, width: '100%', height: 80 }}>
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
            {this.state.validate ?
              <TouchableOpacity style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center', width: '100%', height: 50, backgroundColor: '#3866DF', borderRadius: 3 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: colors.WHITE }}>Reset Password</Text>
              </TouchableOpacity>
              :
              <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center', width: '100%', height: 50, backgroundColor: '#E3E6F0', borderRadius: 3 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: colors.WHITE }}>Reset Password</Text>
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

export default connect(undefined, undefined)(Forgot);
