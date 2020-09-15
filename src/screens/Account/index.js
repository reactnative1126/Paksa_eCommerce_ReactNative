import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Image, Text, TouchableOpacity, Linking } from "react-native";
import { Container, Header, Body, Content } from 'native-base';
import Modal from 'react-native-modalbox';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { signOut } from "@modules/auth/actions";
import { Loading } from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      country: 'Saudi Arabia'
    };
  }

  renderCountryModal() {
    return (
      <Modal
        position={'bottom'}
        backdrop={true}
        style={{ width: wp('100%'), height: 300, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
        ref={'country_modal'}
      // onClosed={this.props.onClose}
      >
        <View style={{ width: wp('100%') }}>
          <TouchableOpacity style={{ position: 'absolute', top: -20, right: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.WHITE, width: 40, height: 40, borderRadius: 20 }}
            onPress={() => this.refs.country_modal.close()}>
            <Icon name="close" type="material" size={25} color='#7581A7' />
          </TouchableOpacity>
          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#7581A7' }}>Select Country</Text>
          </View>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 60, borderBottomWidth: 1, borderBottomColor: '#F0F2F7', padding: 20 }}
            onPress={() => {
              this.setState({ country: 'Saudi Arabia' });
              this.refs.country_modal.close();
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={icons.saudiArabia} style={{ width: 30, height: 20 }} />
              <Text style={{ marginLeft: 10, marginRight: 10, color: '#444', fontWeight: 'bold' }}>Saudi Arabia</Text>
            </View>
            <View style={{
              justifyContent: 'center', alignItems: 'center',
              width: 20, height: 20, borderRadius: 10, borderColor: '#7581A7', borderWidth: 0.5,
              backgroundColor: this.state.country === 'Saudi Arabia' ? '#3866DF' : colors.WHITE
            }}>
              <Icon name="check" type="material" size={15} color={colors.WHITE} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 60, borderBottomWidth: 1, borderBottomColor: '#F0F2F7', padding: 20 }}
            onPress={() => {
              this.setState({ country: 'United Arab Emirates' });
              this.refs.country_modal.close();
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={icons.unitedArabEmirates} style={{ width: 30, height: 20 }} />
              <Text style={{ marginLeft: 10, marginRight: 10, color: '#444', fontWeight: 'bold' }}>United Arab Emirates</Text>
            </View>
            <View style={{
              justifyContent: 'center', alignItems: 'center',
              width: 20, height: 20, borderRadius: 10, borderColor: '#7581A7', borderWidth: 0.5,
              backgroundColor: this.state.country === 'United Arab Emirates' ? '#3866DF' : colors.WHITE
            }}>
              <Icon name="check" type="material" size={15} color={colors.WHITE} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 60, borderBottomWidth: 1, borderBottomColor: '#F0F2F7', padding: 20 }}
            onPress={() => {
              this.setState({ country: 'Egypt' });
              this.refs.country_modal.close();
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={icons.egypt} style={{ width: 30, height: 20 }} />
              <Text style={{ marginLeft: 10, marginRight: 10, color: '#444', fontWeight: 'bold' }}>Egypt</Text>
            </View>
            <View style={{
              justifyContent: 'center', alignItems: 'center',
              width: 20, height: 20, borderRadius: 10, borderColor: '#7581A7', borderWidth: 0.5,
              backgroundColor: this.state.country === 'Egypt' ? '#3866DF' : colors.WHITE
            }}>
              <Icon name="check" type="material" size={15} color={colors.WHITE} />
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar hidden />
        <Loading loading={this.state.loading} />
        <Content style={styles.container}>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', padding: 15 }}>
            <Image style={{ width: 100, height: 40, marginLeft: 10, marginRight: 10, borderRadius: 5 }} source={images.logoDark} />
            <View style={{ justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hala! Nice to meet you</Text>
              {this.props.logged ?
              <Text style={{ fontSize: 12, marginTop: 5 }}>{this.props.user_info.email}</Text>:
              <Text style={{ fontSize: 12, marginTop: 5 }}>The region's favourite online marketplace</Text>}
            </View>
          </View>
          {this.props.logged ?
          <View style={styles.sign}>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this.props.navigation.push('Orders')}>
              <View style={{ justifyContent: 'center', alignItems: 'center', width: 50, height: 50, borderRadius: 25, backgroundColor: '#FeEE00' }}>
                <Icon name="order-bool-ascending-variant" type="material-community" size={25} />
              </View>
              <Text style={{ marginTop: 10, fontSize: 12, fontWeight: 'bold', color: colors.BLACK }}>Orders</Text>
            </TouchableOpacity>
            <View style={{ width: 50 }} />
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this.props.navigation.push('Returns')}>
              <View style={{ justifyContent: 'center', alignItems: 'center', width: 50, height: 50, borderRadius: 25, backgroundColor: '#FeEE00' }}>
                <Icon name="keyboard-return" type="material-community" size={25} />
              </View>
              <Text style={{ marginTop: 10, fontSize: 12, fontWeight: 'bold', color: colors.BLACK }}>Returns</Text>
            </TouchableOpacity>
            <View style={{ width: 50 }} />
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this.props.navigation.push('Credit')}>
              <View style={{ justifyContent: 'center', alignItems: 'center', width: 50, height: 50, borderRadius: 25, backgroundColor: '#FeEE00' }}>
                <Icon name="creditcard" type="antdesign" size={25} />
              </View>
              <Text style={{ marginTop: 10, fontSize: 12, fontWeight: 'bold', color: colors.BLACK }}>Paksa Credit</Text>
            </TouchableOpacity>
            <View style={{ width: 50 }} />
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this.props.navigation.navigate('Cart')}>
              <View style={{ justifyContent: 'center', alignItems: 'center', width: 50, height: 50, borderRadius: 25, backgroundColor: '#FeEE00' }}>
                <Icon name="hearto" type="antdesign" size={25} />
                <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 10, top: 10, width: 15, height: 15, backgroundColor: '#3866DF', borderRadius: 7.5 }}>
                  <Text style={{color: colors.WHITE}}>1</Text>
                </View>
              </View>
              <Text style={{ marginTop: 10, fontSize: 12, fontWeight: 'bold', color: colors.BLACK }}>Wishlist</Text>
            </TouchableOpacity>
          </View> :
          <View style={styles.sign}>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this.props.navigation.push('SignIn')}>
              <View style={{ justifyContent: 'center', alignItems: 'center', width: 50, height: 50, borderRadius: 25, backgroundColor: '#FeEE00' }}>
                <Icon name="user" type="evilicon" size={30} />
              </View>
              <Text style={{ marginTop: 10, fontSize: 12, fontWeight: 'bold', color: colors.BLACK }}>Sign In</Text>
            </TouchableOpacity>
            <View style={{ width: 50 }} />
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this.props.navigation.push('SignUp')}>
              <View style={{ justifyContent: 'center', alignItems: 'center', width: 50, height: 50, borderRadius: 25, backgroundColor: '#FeEE00' }}>
                <Icon name="user" type="evilicon" size={30} />
                <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 10, top: 10, width: 15, height: 15, backgroundColor: '#3866DF', borderRadius: 7.5, borderColor: colors.WHITE, borderWidth: 2 }}>
                  <Icon name="plus" type="antdesign" size={10} color={colors.WHITE} />
                </View>
              </View>
              <Text style={{ marginTop: 10, fontSize: 12, fontWeight: 'bold', color: colors.BLACK }}>Sign Up</Text>
            </TouchableOpacity>
          </View>}

          {this.props.logged && <Text style={{ padding: 15, fontSize: 14, fontWeight: 'bold', color: '#7581A7' }}>MY ACCOUNT</Text>}
          {this.props.logged &&
            <View style={styles.items}>
              <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.push('Address')}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Icon name="address-card-o" type="font-awesome" size={20} />
                  <Text style={{ marginLeft: 10, marginRight: 10, fontWeight: 'bold', color: '#444' }} >Addresses</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Icon name="keyboard-arrow-right" type="material" size={20} color='#444' />
                </View>
              </TouchableOpacity>
              <View style={{ width: '100%', borderTopWidth: 1, borderTopColor: '#EEE' }} />
              <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.push('Payment')}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Icon name="payment" type="material" size={20} />
                  <Text style={{ marginLeft: 10, marginRight: 10, fontWeight: 'bold', color: '#444' }} >Payment</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Icon name="keyboard-arrow-right" type="material" size={20} color='#444' />
                </View>
              </TouchableOpacity>
              <View style={{ width: '100%', borderTopWidth: 1, borderTopColor: '#EEE' }} />
              <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.push('Claims')}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Icon name="file-zip-o" type="font-awesome" size={20} />
                  <Text style={{ marginLeft: 10, marginRight: 10, fontWeight: 'bold', color: '#444' }} >Claims</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Icon name="keyboard-arrow-right" type="material" size={20} color='#444' />
                </View>
              </TouchableOpacity>
              <View style={{ width: '100%', borderTopWidth: 1, borderTopColor: '#EEE' }} />
              <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.push('Profile')}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Icon name="user-circle-o" type="font-awesome" size={20} />
                  <Text style={{ marginLeft: 10, marginRight: 10, fontWeight: 'bold', color: '#444' }} >Profile</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Icon name="keyboard-arrow-right" type="material" size={20} color='#444' />
                </View>
              </TouchableOpacity>
            </View>}

          <Text style={{ padding: 15, fontSize: 14, fontWeight: 'bold', color: '#7581A7' }}>SETTINGS</Text>
          <View style={styles.items}>
            <TouchableOpacity style={styles.item} onPress={() => this.refs.country_modal.open()}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon name="earth" type="antdesign" size={20} />
                <Text style={{ marginLeft: 10, marginRight: 10, fontWeight: 'bold', color: '#444' }} >Country</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 30, height: 20, marginLeft: 10, marginRight: 10, borderRadius: 5 }} source={
                  this.state.country === 'Saudi Arabia' ? icons.saudiArabia : this.state.country === 'United Arab Emirates' ? icons.unitedArabEmirates : icons.egypt
                } />
                <Icon name="keyboard-arrow-right" type="material" size={20} color='#444' />
              </View>
            </TouchableOpacity>
            <View style={{ width: '100%', borderTopWidth: 1, borderTopColor: '#EEE' }} />
            <TouchableOpacity style={styles.item}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon name="flag" type="material" size={20} />
                <Text style={{ marginLeft: 10, marginRight: 10, fontWeight: 'bold', color: '#444' }} >Language</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ marginLeft: 10, marginRight: 10, fontWeight: 'bold', color: '#444' }} >English</Text>
                <Icon name="keyboard-arrow-right" type="material" size={20} color='#444' />
              </View>
            </TouchableOpacity>
            {this.props.logged && (<View style={{ width: '100%', borderTopWidth: 1, borderTopColor: '#EEE' }} />)}
            {this.props.logged &&
              <TouchableOpacity style={styles.item} onPress={() => alert("OK")}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Icon name="subtitles" type="material" size={20} />
                  <Text style={{ marginLeft: 10, marginRight: 10, fontWeight: 'bold', color: '#444' }} >Preferences</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Icon name="keyboard-arrow-right" type="material" size={20} color='#444' />
                </View>
              </TouchableOpacity>}
          </View>
          <Text style={{ padding: 15, fontSize: 14, fontWeight: 'bold', color: '#7581A7' }}>REACH OUT TO US</Text>
          <View style={styles.items}>
            <TouchableOpacity style={styles.item} onPress={() => Linking.openURL('whatsapp://send?phone=+1234567890&')}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon name="whatsapp" type="material-community" size={20} />
                <Text style={{ marginLeft: 10, marginRight: 10, fontWeight: 'bold', color: '#444' }} >WhatsApp Us</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon name="keyboard-arrow-right" type="material" size={20} color='#444' />
              </View>
            </TouchableOpacity>
            <View style={{ width: '100%', borderTopWidth: 1, borderTopColor: '#EEE' }} />
            <TouchableOpacity style={styles.item} onPress={() => Linking.openURL('https://help.paksa.com')}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon name="help-outline" type="material" size={20} />
                <Text style={{ marginLeft: 10, marginRight: 10, fontWeight: 'bold', color: '#444' }} >Help</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon name="keyboard-arrow-right" type="material" size={20} color='#444' />
              </View>
            </TouchableOpacity>
            <View style={{ width: '100%', borderTopWidth: 1, borderTopColor: '#EEE' }} />
            <TouchableOpacity style={styles.item} onPress={() => Linking.openURL('tel:+1234567890')}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon name="phone-call" type="feather" size={20} />
                <Text style={{ marginLeft: 10, marginRight: 10, fontWeight: 'bold', color: '#444' }} >Contact Us</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon name="keyboard-arrow-right" type="material" size={20} color='#444' />
              </View>
            </TouchableOpacity>
          </View>
          {this.props.logged &&
            <TouchableOpacity style={[styles.item, { padding: 15 }]} onPress={() => this.props.signOut(false)}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon name="poweroff" type="antdesign" size={20} />
                <Text style={{ marginLeft: 10, marginRight: 10, fontWeight: 'bold', color: '#444' }} >Sign Out</Text>
              </View>
            </TouchableOpacity>}
          <View style={{ width: '100%', borderTopWidth: 1, borderTopColor: '#EEE' }} />
          <View style={{ width: wp('100%'), paddingTop: 40, alignItems: 'center' }}>
            <View style={{ width: '50%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com')}><Icon name="facebook" type="font-awesome" size={20} color='#7581A7' /></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com')}><Icon name="twitter" type="font-awesome" size={20} color='#7581A7' /></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com')}><Icon name="instagram" type="font-awesome" size={20} color='#7581A7' /></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com')}><Icon name="linkedin" type="font-awesome" size={20} color='#7581A7' /></TouchableOpacity>
            </View>
          </View>
          <View style={{ width: wp('100%'), paddingTop: 40, alignItems: 'center' }}>
            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <TouchableOpacity><Text style={{ fontSize: 10, color: '#7581A7' }}>Terms Of Use</Text></TouchableOpacity>
              <View style={{ width: 2, height: 2, backgroundColor: '#7581A7' }} />
              <TouchableOpacity><Text style={{ fontSize: 10, color: '#7581A7' }}>Terms Of Sale</Text></TouchableOpacity>
              <View style={{ width: 2, height: 2, backgroundColor: '#7581A7' }} />
              <TouchableOpacity><Text style={{ fontSize: 10, color: '#7581A7' }}>Privacy Policy</Text></TouchableOpacity>
            </View>
          </View>
          <View style={{ width: wp('100%'), paddingTop: 20, alignItems: 'center' }}>
            <View style={{ width: '40%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <TouchableOpacity><Text style={{ fontSize: 10, color: '#7581A7' }}>Warranty Policy</Text></TouchableOpacity>
              <View style={{ width: 2, height: 2, backgroundColor: '#7581A7' }} />
              <TouchableOpacity><Text style={{ fontSize: 10, color: '#7581A7' }}>Return Policy</Text></TouchableOpacity>
            </View>
          </View>
          <View style={{ width: wp('100%'), paddingTop: 20, alignItems: 'center' }}>
            <Text style={{ fontSize: 10, color: '#CCC' }}>Version 3.7 (919)</Text>
          </View>
          <View style={{ width: wp('100%'), paddingTop: 20, alignItems: 'center' }}>
            <Text style={{ fontSize: 10, color: '#7581A7' }}>@ 2020 paksa.com, All rights reserved</Text>
          </View>
        </Content>
        {this.renderCountryModal()}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F9FF'
  },
  sign: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100,
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 5,
  },
  items: {
    width: '100%',
    paddingLeft: 15, paddingRight: 15,
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 5,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15, paddingBottom: 15,
  }

});

const mapStateToProps = state => {
  return {
    logged: state.auth.logged,
    user_info: state.auth.user_info
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signOut: (data) => {
      dispatch(signOut(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
