import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text, FlatList, TextInput, TouchableOpacity } from "react-native";
import { Container, Header, Body, Content } from 'native-base';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { setUser } from "@modules/auth/actions";
import { Loading, ImageOne, ProductsItem3, Products, ProductsHeader, ProductsList } from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons, dummy } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

class Cart extends Component {
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
        <Content style={{ backgroundColor: '#EAEAEA' }}>
          <ImageOne image={images.banner04} style={{ height: 120, padding: 5 }} />
          <View style={{ padding: 20, width: wp('100%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF8EC' }}>
            <Text style={{ fontSize: 12, width: wp('70%') }}>Some of the products in your cart have run out of stock and have been removed from your cart.{'\n\n'}The prices of some products in your cart have changed{'\n\n'}Please review your cart before proceeding</Text>
            <View style={{ width: 1, height: 50, backgroundColor: '#EEE' }} />
            <TouchableOpacity >
              <Text style={{ width: wp('25%'), textAlign: 'center', fontWeight: 'bold', color: '#F3AC30' }}>DISMISS</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={dummy.details}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => {
              return (
                <ProductsItem3 item={item}  onPress={() => this.props.navigation.navigate('Shops3')} />
              )
            }}
          />
          <View style={{ marginTop: 5, padding: 20, width: wp('100%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF8EC' }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Buy now, pay later with select cards. Choose this option during checkout</Text>
          </View>
          <View style={{ padding: 20 }}>
            <View style={styles.applyView}>
              <TextInput
                style={{ width: wp('100%') - 200, height: 20, borderColor: 'gray' }}
                placeholder="Enter Coupon Code or Gift Card"
              />
              <TouchableOpacity>
                <Text style={{ color: '#3866DF', fontWeight: 'bold' }}>APPLY</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ paddingLeft: 20, paddingRight: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row' }}>
                <Text>Subtotal </Text><Text style={{ color: colors.GREY.DARK }}>2 Items</Text>
              </View>
              <Text>AED 519.95</Text>
            </View>
          </View>
          <View style={{ marginTop: 10, paddingLeft: 20, paddingRight: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row' }}>
                <Text>Deliver to </Text><Text style={{ color: colors.GREY.DARK }}>2 Items</Text>
              </View>
              <Text>AED 10.00</Text>
            </View>
          </View>
          <View style={{ marginTop: 20, paddingLeft: 20, paddingRight: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#444' }}>TOTAL</Text><Text style={{ color: colors.GREY.DARK }}> (Inclusive of VAT)</Text>
              </View>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#444' }}>AED 529.95</Text>
            </View>
          </View>
          <View style={{ width: wp('100%'), justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', width: '70%', justifyContent: 'space-around', marginTop: 20 }}>
              <Icon name="cc-mastercard" type="font-awesome-5" size={30} color={colors.GREY.DARK} />
              <Icon name="cc-visa" type="font-awesome-5" size={30} color={colors.GREY.DARK} />
              <Icon name="cc-amex" type="font-awesome-5" size={30} color={colors.GREY.DARK} />
              <Icon name="cc-paypal" type="font-awesome-5" size={30} color={colors.GREY.DARK} />
            </View>
          </View>
          <Products style={{ width: wp('100%'), marginTop: 15, padding: 15, backgroundColor: '#FAFAFA' }}>
            <ProductsHeader title="Recommended For You" />
            <ProductsList data={dummy.recommends} style={{ marginTop: 15 }}  onPress={() => this.props.navigation.navigate('Detail3')} />
          </Products>
          <View style={{ height: 120 }} />
        </Content>
        <View style={{ position: 'absolute', bottom: 0, width: wp('100%'), height: 70, borderWidth: 0, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: colors.WHITE }}>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: wp('90%'), height: 45, backgroundColor: '#3866DF', paddingLeft: 20, paddingRight: 20 }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: colors.WHITE }}>BUY 2 ITEMS FOR AED 529.95</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  applyView: {
    width: '100%',
    // height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
  }
});

export default connect(undefined, undefined)(Cart);
