import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Container, Header, Body, Content } from 'native-base';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { setUser } from "@modules/auth/actions";
import { Loading, ImageSilder, ImageOne, Categories, Products, ProductsHeader, ProductsList, ProductsList2, ProductsList3, ProductsList4, ProductsList5, Brands } from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons, dummy } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

class Home extends Component {
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
            <View style={{ flexDirection: 'row', alignItems: 'center', width: 90 }}>
              <Image style={{ width: 70, height: 30, marginLeft: 10, marginRight: 10, borderRadius: 5 }} source={images.logoDark} />
            </View>
            <TouchableOpacity style={styles.searchBar} onPress={() => this.props.navigation.push('Search')}>
              <Icon name="search" type="material" size={25} color={colors.GREY.DARK} />
              <Text style={{ width: wp('100%') - 150, height: 20, borderColor: 'gray', color: colors.GREY.DARK }} >What are you looking for?</Text>
            </TouchableOpacity>
          </View>
        </Header>

        <Content>
          <ImageSilder silders={dummy.banners} style={{ width: wp('100%'), height: 150 }} onPress={() => this.props.navigation.navigate('Shops')} />
          <Categories data={dummy.categories} style={{ marginTop: 35 }} type={1}
            onPress={() => this.props.navigation.navigate('Shops')} />
          <ImageOne image={images.image01} style={{ height: 150, padding: 15 }} onPress={() => this.props.navigation.navigate('Shops')} />
          <Products style={{ width: wp('100%'), paddingLeft: 15, paddingRight: 15 }}>
            <ProductsHeader title={"Recommended For You"} />
            <ProductsList data={dummy.recommends} style={{ marginTop: 15 }} onPress={() => this.props.navigation.navigate('Detail')} />
          </Products>

          <Products style={{ width: wp('100%'), paddingLeft: 15, paddingRight: 15, paddingTop: 15 }}>
            <ProductsHeader title={"Summer Saviours"} />
            <ProductsList2 style={{ marginTop: 15 }} data={dummy.data1} onPress={() => this.props.navigation.navigate('Detail')} />
          </Products>

          <ImageSilder silders={dummy.banners2} style={{ marginTop: 15, width: wp('100%'), height: 120 }} onPress={() => this.props.navigation.navigate('Shops')} />
          <Products style={{ width: wp('100%'), marginTop: 35, paddingLeft: 15, paddingRight: 15 }}>
            <ProductsHeader
              onPress={() => this.props.navigation.navigate('Shops')}
              title={"Health Care Essentials"}
              viewStyle={{ borderColor: '#3967DF' }}
              textStyle={{ fontSize: 12, fontWeight: 'bold', color: '#3967DF' }} />
            <ProductsList data={dummy.recommends} style={{ marginTop: 15 }} onPress={() => this.props.navigation.navigate('Detail')} />
          </Products>

          <Products style={{ width: wp('100%'), marginTop: 5, padding: 15, backgroundColor: '#EDEDED' }}>
            <ProductsHeader
              title={"Featured Brands"} />
            <Brands data={dummy.brands} style={{ marginTop: 15 }} onPress={() => this.props.navigation.navigate('Shops')} />
          </Products>

          <Products style={{ width: wp('100%'), padding: 15, backgroundColor: '#EDEDED' }}>
            <ProductsHeader
              onPress={() => this.props.navigation.navigate('Shops')}
              title={"Extra 10% Off Bestsellers"}
              viewStyle={{ borderColor: '#3967DF', backgroundColor: colors.WHITE }}
              textStyle={{ fontSize: 12, fontWeight: 'bold', color: '#3967DF' }} />
            <ProductsList data={dummy.recommends} style={{ marginTop: 15 }} onPress={() => this.props.navigation.navigate('Detail')} />
          </Products>

          <Products style={{ width: wp('100%'), padding: 15 }}>
            <ProductsHeader
              onPress={() => this.props.navigation.navigate('Shops')}
              title={"Mobiles & Electronics"}
              titleStyle={{ backgroundColor: '#F3DFCB', paddingLeft: 5, paddingRight: 5 }}
              viewStyle={{ backgroundColor: colors.WHITE, borderWidth: 0 }}
              textStyle={{ fontSize: 12, fontWeight: 'bold', color: '#252525', textDecorationLine: 'underline', textDecorationColor: '#D8D8D8' }} />
            <ProductsList3 style={{ paddingTop: 5 }} data={dummy.data2} onPress={() => this.props.navigation.navigate('Detail')} />
          </Products>

          <Products style={{ width: wp('100%'), paddingLeft: 15, paddingRight: 15 }}>
            <ProductsHeader
              onPress={() => this.props.navigation.navigate('Shops')}
              title={"Top Picks In Electronics"}
              viewStyle={{ borderColor: '#3967DF' }}
              textStyle={{ fontSize: 12, fontWeight: 'bold', color: '#3967DF' }} />
            <ProductsList data={dummy.recommends} style={{ marginTop: 15 }} onPress={() => this.props.navigation.navigate('Detail')} />
          </Products>

          <Products style={{ width: wp('100%'), marginTop: 15, paddingLeft: 15, paddingRight: 15 }}>
            <ProductsHeader
              onPress={() => this.props.navigation.navigate('Shops')}
              title={"Save Big On Mobile & Tablets"}
              viewStyle={{ borderColor: '#3967DF', backgroundColor: '#E1F9EA' }}
              textStyle={{ fontSize: 12, fontWeight: 'bold', color: '#3967DF' }} />
            <ProductsList data={dummy.recommends} style={{ marginTop: 15 }} onPress={() => this.props.navigation.navigate('Detail')} />
          </Products>

          <Products style={{ width: wp('100%'), padding: 15 }}>
            <ProductsList4 data={dummy.data3} onPress={() => this.props.navigation.navigate('Detail')} />
          </Products>

          <Products style={{ width: wp('100%'), paddingLeft: 15, paddingRight: 15 }}>
            <ProductsHeader
              onPress={() => this.props.navigation.navigate('Shops')}
              title={"Renewed By paksa - Like New, For Less"}
              titleStyle={{ width: '60%' }}
              viewStyle={{ borderColor: '#3967DF' }}
              textStyle={{ fontSize: 12, fontWeight: 'bold', color: '#3967DF' }} />
            <ProductsList data={dummy.recommends} style={{ marginTop: 15 }} onPress={() => this.props.navigation.navigate('Detail')} />
          </Products>

          <Products style={{ width: wp('100%'), padding: 15 }}>
            <ProductsHeader
              onPress={() => this.props.navigation.navigate('Shops')}
              title={"Mobiles & Electronics"}
              titleStyle={{ backgroundColor: '#F3DFCB', paddingLeft: 5, paddingRight: 5 }}
              viewStyle={{ backgroundColor: colors.WHITE, borderWidth: 0 }}
              textStyle={{ fontSize: 12, fontWeight: 'bold', color: '#252525', textDecorationLine: 'underline', textDecorationColor: '#D8D8D8' }} />
            <ProductsList3 style={{ paddingTop: 15 }} data={dummy.data4} onPress={() => this.props.navigation.navigate('Detail')} />
          </Products>

          <Products style={{ width: wp('100%'), paddingLeft: 15, paddingRight: 15 }}>
            <ProductsHeader
              title={"Home & Kitchen Deals"}
              titleStyle={{ width: '60%' }}
              viewStyle={{ borderColor: '#3967DF' }}
              textStyle={{ fontSize: 12, fontWeight: 'bold', color: '#3967DF' }} />
            <ProductsList data={dummy.recommends} style={{ marginTop: 15 }} onPress={() => this.props.navigation.navigate('Detail')} />
          </Products>

          <Products style={{ width: wp('100%'), padding: 15 }}>
            <ProductsList5 data={dummy.data5} onPress={() => this.props.navigation.navigate('Detail')} />
          </Products>

          <Products style={{ width: wp('100%'), paddingLeft: 15, paddingRight: 15 }}>
            <ProductsHeader
              onPress={() => this.props.navigation.navigate('Shops')}
              title={"Deals On Home Appliances"}
              titleStyle={{ width: '60%' }}
              viewStyle={{ borderColor: '#3967DF' }}
              textStyle={{ fontSize: 12, fontWeight: 'bold', color: '#3967DF' }} />
            <ProductsList data={dummy.recommends} style={{ marginTop: 15 }} onPress={() => this.props.navigation.navigate('Detail')} />
          </Products>

          <ImageOne image={images.banner20} style={{ height: 150, padding: 15 }} onPress={() => this.props.navigation.navigate('Shops')} />
        </Content>
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
    backgroundColor: colors.WHITE
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
    width: wp('100%') - 120,
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.GREY.SECONDARY,
    paddingLeft: 5,
    paddingRight: 5,
  },
});

export default connect(undefined, undefined)(Home);
