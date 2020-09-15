import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Container, Header, Body, Content } from 'native-base';
import Swiper from "react-native-swiper";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { setUser } from "@modules/auth/actions";
import { Loading, Products, ProductsHeader, ProductsList, ImageOne } from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons, dummy } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      loadingMore: false,
      refreshing: false,
      tab: true,
      cart: false
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
              <Icon name="arrow-back" type="material" size={25} color={colors.GREY.DARK} onPress={() => this.props.navigation.goBack()} />
              <Image style={{ width: 70, height: 30, marginLeft: 20, marginRight: 10, borderRadius: 5 }} source={images.logoDark} />
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.push('Search')}>
              <Icon name="search" type="material" size={25} color={colors.GREY.DARK} />
            </TouchableOpacity>
          </View>
        </Header>
        <Content>
          <TouchableOpacity style={{ position: 'absolute', top: 10, right: 20, width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EEE', zIndex: 1000 }}>
            <Icon name="heart-outline" type="material-community" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={{ position: 'absolute', top: 60, right: 20, width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EEE', zIndex: 1000 }}>
            <Icon name="sharealt" type="antdesign" size={20} />
          </TouchableOpacity>
          <Swiper
            // autoplay={true}
            dotStyle={{ width: 5, height: 5 }}
            activeDotStyle={{ width: 5, height: 5 }}
            dotColor={colors.GREY.ACTIVEDOT}
            activeDotColor={colors.BLACK}
            containerStyle={{ width: '100%', height: 450, justifyContent: 'center', alignItems: 'center' }}
          >
            {dummy.detail.images.map((item, key) => {
              return (
                <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                  <Image key={key} source={item.image} resizeMode="stretch" />
                </View>
              );
            })}
          </Swiper>
          <View style={{ width: '100%', padding: 20 }}>
            <Text style={{ fontSize: 14, color: '#3866DF' }}>{dummy.detail.type}</Text>
            <Text style={{ marginTop: 10, fontSize: 18, color: '#414141' }}>{dummy.detail.title}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 18, color: '#414141' }}>AED </Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#414141' }}>{dummy.detail.price}</Text>
                <Text style={{ fontSize: 12, color: '#414141', textDecorationLine: 'line-through' }}> AED </Text>
                <Text style={{ fontSize: 14, color: '#414141', textDecorationLine: 'line-through' }}>{dummy.detail.price2}</Text>
              </View>
              <Text style={{ fontSize: 14, color: '#414141' }}>(Inclusive of VAT)</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 20, paddingRight: 20, marginBottom: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={{ width: 80, height: 25 }} source={images.express} />
              <Icon name="help-outline" type="material" size={20} color="#414141" />
            </View>
            <View style={{ marginLeft: 5, width: 70, height: 20, backgroundColor: '#DCECD4', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 12, fontWeight: '500', color: '#62A04F' }}>{dummy.detail.percent}% OFF</Text>
            </View>
          </View>
          <ImageOne image={images.banner20} style={{ height: 120 }} onPress={() => this.props.navigation.navigate('Shops')} />
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderBottomWidth: 0.5, borderBottomColor: '#DDD' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#414141' }}>Deliver to </Text>
              <Text style={{ fontWeight: 'bold' }}>Dubal</Text>
            </View>
            <Icon name="keyboard-arrow-right" type="material" size={20} color="#414141" />
          </TouchableOpacity>
          <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#999' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#414141' }}>Order in the next </Text>
              <Text style={{ color: '#414141', fontWeight: 'bold' }}>{dummy.detail.time}</Text>
              <Text style={{ color: '#414141' }}> and receive it by</Text>
            </View>
            <Text style={{ color: '#62A04F', fontWeight: 'bold' }}>{dummy.detail.date}</Text>
          </View>
          <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#414141', borderBottomWidth: 1, borderBottomColor: '#999' }}>
            <Text style={{ fontSize: 18, color: '#414141', fontWeight: 'bold' }}>Offer Details</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <Icon name="rest" type="antdesign" size={20} />
              <Text style={{ color: '#414141', marginLeft: 10 }}>Enjoy hassle free returns with this offer</Text>
            </View>
          </View>
          <View style={{ padding: 20, paddingTop: 10, borderBottomWidth: 1, borderBottomColor: '#414141', borderBottomWidth: 1, borderBottomColor: '#999' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <Icon name="gift" type="antdesign" size={20} />
              <Text style={{ color: '#414141', marginLeft: 10 }}>Sold by </Text>
              <Text style={{ color: '#3866DF', marginLeft: 10, textDecorationLine: 'underline' }}>paksa</Text>
            </View>
          </View>
          <View style={{ padding: 20, paddingTop: 10, borderBottomWidth: 1, borderBottomColor: '#414141', borderBottomWidth: 1, borderBottomColor: '#999' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="tag" type="antdesign" size={20} />
                <View>
                  <Text style={{ color: '#414141', marginLeft: 10 }}>2 other offers from </Text>
                  <Text style={{ color: '#414141', fontWeight: 'bold', marginLeft: 10 }}>AED 102.00</Text>
                </View>
              </View>
              <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 120, height: 35, borderWidth: 1, borderColor: '#3866DF', paddingLeft: 10, paddingRight: 10 }}>
                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#3866DF' }}>View all offers</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ height: 10, backgroundColor: '#EDEDED' }} />
          <View style={{ width: wp('100%'), flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={{ width: wp('50%'), height: 50, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 5, borderBottomColor: this.state.tab ? '#3866DF' : '#EDEDED' }}
              onPress={() => this.setState({ tab: true })}
            >
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: this.state.tab ? '#3866DF' : '#414141' }}>Overview</Text>
            </TouchableOpacity>
            <View style={{ width: 1, height: '100%', backgroundColor: '#EDEDED' }} />
            <TouchableOpacity style={{ width: wp('50%'), height: 50, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 5, borderBottomColor: !this.state.tab ? '#3866DF' : '#EDEDED' }}
              onPress={() => this.setState({ tab: false })}
            >
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: !this.state.tab ? '#3866DF' : '#414141' }}>Specifications</Text>
            </TouchableOpacity>
          </View>
          {this.state.tab ?
            <View style={{ width: wp('100%'), padding: 10 }}>
              <Text style={{ fontWeight: 'bold', color: '#414141' }}>Highlights</Text>
              <Text style={{ marginTop: 10, color: '#414141' }}>. Water and shock resistant</Text>
              <Text style={{ marginTop: 10, color: '#414141' }}>. Push button hidden clasp</Text>
              <Text style={{ marginTop: 10, color: '#414141' }}>. Chronographic features with case material made up of alloy</Text>
              <Text style={{ marginTop: 10, color: '#414141' }}>. Quartz watch movement ensures accurate timekeeping</Text>
            </View> :
            <View style={{ width: wp('100%'), paddingTop: 10 }}>
              <Text style={{ fontWeight: 'bold', color: '#414141', marginLeft: 10 }}>Specifications</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', backgroundColor: color.WHITE, padding: 10 }}>
                <Text style={{ width: wp('50%'), color: '#999' }}>Dial Diameter</Text>
                <Text style={{ width: wp('50%'), color: '#414141' }}>about 4.1cm</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', backgroundColor: '#F6F8FB', padding: 10 }}>
                <Text style={{ width: wp('50%'), color: '#999' }}>Case Thickness</Text>
                <Text style={{ width: wp('50%'), color: '#414141' }}>about 1.1cm</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', backgroundColor: color.WHITE, padding: 10 }}>
                <Text style={{ width: wp('50%'), color: '#999' }}>Band Width</Text>
                <Text style={{ width: wp('50%'), color: '#414141' }}>about 2.0cm</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', backgroundColor: '#F6F8FB', padding: 10 }}>
                <Text style={{ width: wp('50%'), color: '#999' }}>Watch Weight</Text>
                <Text style={{ width: wp('50%'), color: '#414141' }}>22cm</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', backgroundColor: color.WHITE, padding: 10 }}>
                <Text style={{ width: wp('50%'), color: '#999' }}>Country of Origin</Text>
                <Text style={{ width: wp('50%'), color: '#414141' }}>about 140g</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', backgroundColor: '#F6F8FB', padding: 10 }}>
                <Text style={{ width: wp('50%'), color: '#999' }}>Department</Text>
                <Text style={{ width: wp('50%'), color: '#414141' }}>Men</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', backgroundColor: color.WHITE, padding: 10 }}>
                <Text style={{ width: wp('50%'), color: '#999' }}>DiDial Colour</Text>
                <Text style={{ width: wp('50%'), color: '#414141' }}>Blue</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', backgroundColor: '#F6F8FB', padding: 10 }}>
                <Text style={{ width: wp('50%'), color: '#999' }}>Model Number</Text>
                <Text style={{ width: wp('50%'), color: '#414141' }}>SW0029</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 150, height: 35, borderWidth: 1, borderColor: '#3866DF', paddingLeft: 10, paddingRight: 10 }}>
                  <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#3866DF' }}>View More</Text>
                </TouchableOpacity>
              </View>
            </View>
          }
          <View style={{ height: 10, backgroundColor: '#EDEDED' }} />
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F7F9FE', width: wp('100%'), height: 50, borderTopWidth: 1, borderTopColor: '#DDD', borderBottomWidth: 1, borderBottomColor: '#DDD' }}>
            <Text>Back To Top</Text>
            <Icon name="arrowup" type="antdesign" size={15} />
          </TouchableOpacity>


          <Products style={{ width: wp('100%'), padding: 15, backgroundColor: '#EDEDED' }}>
            <ProductsHeader title="CUSTOMERS ALSO VIEWED" />
            <ProductsList data={dummy.recommends} style={{ marginTop: 15 }} onPress={() => this.props.navigation.navigate('Detail')} />
          </Products>
          <View style={{ height: 100 }} />
        </Content>
        <View style={{ position: 'absolute', bottom: 0, width: wp('100%'), height: 50, borderWidth: 0, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: colors.WHITE }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', width: 50, height: 45, borderWidth: 0, borderColor: '#3866DF' }}>
            <Text style={{ fontSize: 14, color: '#414141' }}>QTY</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#414141' }}>1</Text>
          </View>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: wp('100%') - 60, height: 45, backgroundColor: '#3866DF', paddingLeft: 20, paddingRight: 20 }}
          onPress={()=> this.setState({cart: true})}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: colors.WHITE }}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
        {this.state.cart && 
        <TouchableOpacity style={{ position: 'absolute', top: 55, backgroundColor: '#00000080', width: wp('100%'), height: hp('100%') }} onPress={()=> this.setState({cart: false})}/>}
        {this.state.cart && 
        <View style={styles.addModal}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Icon name="checkcircle" type="antdesign" color={colors.GREEN.DEFAULT} size={25}></Icon>
            <View style={{ width: wp('100%') - 160 }}>
              <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Men's Waters Resistant Stainless Steel Chronogra..</Text>
              <Text style={{ fontSize: 10, fontWeight: 'normal' }}>Added to cart</Text>
            </View>
            <View style={{ width: 70, alignItems: 'flex-end' }}>
              <Text style={{ fontSize: 10, fontWeight: 'normal' }}>Cart Total</Text>
              <Text style={{ fontSize: 10, fontWeight: 'bold' }}>SAR 4,428.10</Text>
            </View>
          </View>
          <View style={{ paddingTop: 10, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={{ width: wp('43%'), height: 30, borderWidth: 1, borderColor: colors.BLUE.PRIMARY, justifyContent: 'center', alignItems: 'center' }} onPress={()=> this.setState({cart: false})}>
              <Text style={{ fontSize: 11, fontWeight: 'bold', color: colors.BLUE.DEFAULT }}>CONTINUE SHOPPING</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: colors.BLUE.DEFAULT, width: wp('43%'), height: 30, borderWidth: 1, borderColor: colors.BLUE.PRIMARY, justifyContent: 'center', alignItems: 'center' }} onPress={()=>{
              this.setState({cart: false});
              this.props.navigation.navigate('Cart')}}>
              <Text style={{ fontSize: 11, fontWeight: 'bold', color: colors.WHITE }}>CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </View>}
        {this.state.cart && 
        <View style={{ position: 'absolute', top: 150, width: wp('100%'), backgroundColor: colors.GREY.PRIMARY}}>
          <Products style={{ width: wp('100%'), padding: 15, backgroundColor: '#EDEDED' }}>
            <ProductsHeader title="FREQUENTY BOUGHT TOGETHER" />
            <ProductsList data={dummy.recommends} style={{ marginTop: 15 }} onPress={() => this.props.navigation.navigate('Detail')} />
          </Products>
        </View>}
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
  addModal: {
    position: 'absolute', top: 55,
    width: wp('100%'),
    height: 100,
    backgroundColor: colors.WHITE,
    padding: 20, paddingBottom: 5
  }
});

export default connect(undefined, undefined)(Detail);
