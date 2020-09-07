import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Container, Header, Body, Content } from 'native-base';
import Modal from 'react-native-modalbox';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { setUser } from "@modules/auth/actions";
import { Loading } from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons, dummy } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

class Fitlers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar hidden />
        <Loading loading={this.state.loading} />
        {/* Header Part */}
        <Header style={styles.header}>
          <View style={styles.headerBar}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: 120 }}>
              <Image style={{ width: 70, height: 30, marginLeft: 10, marginRight: 10, borderRadius: 5 }} source={images.logoDark} />
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
              <Text style={{ fontWeight: 'bold' }}>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </Header>
        <Body>
          <View style={{ width: wp('100%'), padding: 20 }}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 60, borderBottomWidth: 1, borderBottomColor: '#F0F2F7' }}
              onPress={() => this.props.navigation.push('Category')}>
              <Text style={{ color: '#444', fontWeight: this.state.sorting === 'Popularity' ? 'bold' : 'normal' }}>Category</Text>
              <Icon name="keyboard-arrow-right" type="material" size={25} color={colors.GREY.DARK} />
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 60, borderBottomWidth: 1, borderBottomColor: '#F0F2F7' }}
              onPress={() => this.props.navigation.push('Brand')}>
              <Text style={{ color: '#444', fontWeight: this.state.sorting === 'Popularity' ? 'bold' : 'normal' }}>Brand</Text>
              <Icon name="keyboard-arrow-right" type="material" size={25} color={colors.GREY.DARK} />
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 60, borderBottomWidth: 1, borderBottomColor: '#F0F2F7' }}
              onPress={() => this.props.navigation.push('Price')}>
              <Text style={{ color: '#444', fontWeight: this.state.sorting === 'Popularity' ? 'bold' : 'normal' }}>Price</Text>
              <Icon name="keyboard-arrow-right" type="material" size={25} color={colors.GREY.DARK} />
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 60, borderBottomWidth: 1, borderBottomColor: '#F0F2F7' }}
              onPress={() => this.props.navigation.push('NewArrival')}>
              <Text style={{ color: '#444', fontWeight: this.state.sorting === 'Popularity' ? 'bold' : 'normal' }}>New Arrival</Text>
              <Icon name="keyboard-arrow-right" type="material" size={25} color={colors.GREY.DARK} />
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 60, borderBottomWidth: 1, borderBottomColor: '#F0F2F7' }}
              onPress={() => this.props.navigation.push('Colour')}>
              <Text style={{ color: '#444', fontWeight: this.state.sorting === 'Popularity' ? 'bold' : 'normal' }}>Colour</Text>
              <Icon name="keyboard-arrow-right" type="material" size={25} color={colors.GREY.DARK} />
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 60, borderBottomWidth: 1, borderBottomColor: '#F0F2F7' }}
              onPress={() => this.props.navigation.push('Seller')}>
              <Text style={{ color: '#444', fontWeight: this.state.sorting === 'Popularity' ? 'bold' : 'normal' }}>Seller</Text>
              <Icon name="keyboard-arrow-right" type="material" size={25} color={colors.GREY.DARK} />
            </TouchableOpacity>
          </View>
          <View style={{ position: 'absolute', bottom: 0, width: wp('100%'), height: 100, borderWidth: 0, paddingBottom: 30, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: wp('25%'), height: 45, borderWidth: 2, borderColor: '#3866DF' }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#3866DF' }}>RESET</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: wp('65%'), height: 45, backgroundColor: '#3866DF', paddingLeft: 20, paddingRight: 20 }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: colors.WHITE }}>494 Items</Text>
              <Text style={{fontSize: 14, fontWeight: 'bold', color: colors.WHITE}}>APPLY</Text>
            </TouchableOpacity>
          </View>
        </Body>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    backgroundColor: colors.WHITE,
    borderBottomWidth: 0
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
});

export default connect(undefined, undefined)(Fitlers);
