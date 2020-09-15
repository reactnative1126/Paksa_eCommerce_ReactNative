import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Container, Header, Body, Content } from 'native-base';
import Swiper from "react-native-swiper";

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

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
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
              <Icon name="arrow-back" type="material" size={25} color={colors.GREY.DARK} onPress={() => this.props.navigation.pop()} />
              <Image style={{ width: 70, height: 30, marginLeft: 20, marginRight: 10, borderRadius: 5 }} source={images.logoDark} />
            </View>
          </View>
        </Header>
        <Content contentContainerStyle={{ flex: 1 }}>
          <View style={{ width: wp('100%'), backgroundColor: '#F9F9F9', paddingLeft: 20, paddingTop: 10, paddingBottom: 10 }}>
            <Text style={{ fontSize: 20 }}>Edli Zaganjori</Text>
            <Text>edlizaganjori@gmail.com</Text>
          </View>
          <View style={{ marginTop: 10, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, paddingTop: 10, backgroundColor: '#F9F9F9' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#878787' }}>PERSONAL INFORMATION</Text>
            <TouchableOpacity><Text style={{ fontSize: 12, color: colors.BLUE.DEFAULT }}>Edit</Text></TouchableOpacity>
          </View>
          <View style={{ width: wp('100%'), backgroundColor: '#F9F9F9', padding: 20, borderBottomWidth: 1, borderBottomColor: '#EEE' }}>
            <Text style={{ fontSize: 12, color: '#BBB' }}>First Name</Text>
            <Text style={{fontWeight: 'bold', marginTop: 5}}>Edli</Text>
          </View>
          <View style={{ width: wp('100%'), backgroundColor: '#F9F9F9', padding: 20, borderBottomWidth: 1, borderBottomColor: '#EEE' }}>
            <Text style={{ fontSize: 12, color: '#BBB' }}>Last Name</Text>
            <Text style={{fontWeight: 'bold', marginTop: 5}}>Zaganjori</Text>
          </View>
          <View style={{ width: wp('100%'), backgroundColor: '#F9F9F9', padding: 20, borderBottomWidth: 1, borderBottomColor: '#EEE' }}>
            <Text style={{ fontSize: 12, color: '#BBB' }}>Receive Communications in</Text>
            <Text style={{fontWeight: 'bold', marginTop: 5}}>English</Text>
          </View>
          <View style={{ marginTop: 10, width: wp('100%'), backgroundColor: '#F9F9F9', paddingLeft: 20, paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#EEE' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#878787' }}>SECURITY INFORMATION</Text>
            <TouchableOpacity style={{marginTop: 5, borderRadius: 5, borderWidth: 1, borderColor: colors.BLUE.DEFAULT, width: 150, padding: 2, alignItems: 'center'}}>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: colors.BLUE.DEFAULT}}>CHANGE PASSWORD</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingLeft: 20,
    paddingRight: 20,
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
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('100%') - 150,
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.GREY.SECONDARY,
    paddingLeft: 5,
    paddingRight: 5
  },
});

export default connect(undefined, undefined)(Profile);
