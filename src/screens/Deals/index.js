import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text, TextInput } from "react-native";
import { Container, Header, Body, Content } from 'native-base';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { setUser } from "@modules/auth/actions";
import { Loading, ImageSilder, ImageOne, Categories, ProductsList6, ProductsList7, Products, ProductsHeader, ProductsList, Brands } from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons, dummy } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

class Deals extends Component {
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
        <Header style={styles.header}>
          <View style={styles.headerBar}>
            <View style={styles.searchBar}>
              <Icon name="search" type="material" size={25} color={colors.GREY.DARK} />
              <TextInput
                style={{ width: wp('100%'), height: 20, borderColor: 'gray' }}
                placeholder="What are you looking for?"
              />
            </View>
          </View>
        </Header>
        <Content>
          <ImageSilder silders={dummy.banners3} style={{ width: wp('100%'), height: 150 }} onPress={() => this.props.navigation.navigate('Shops2')}  />
          <Products style={{ width: wp('100%'), paddingLeft: 15, paddingRight: 15, paddingTop: 35 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: 180, borderWidth: 2 }}>
              <View style={{ width: 8, height: '100%', borderRightWidth: 2, backgroundColor: '#F0E20F' }} />
              <Text style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 2.5, paddingBottom: 2.5, textAlign: 'center', fontSize: 17, fontWeight: 'bold' }}>Shop by category</Text>
            </View>
            <Categories data={dummy.categories2} style={{ marginTop: 15 }} type={2} onPress={() => this.props.navigation.navigate('Shops2')}  />
          </Products>
          <Products style={{ width: wp('100%'), marginTop: 15, paddingLeft: 15, paddingRight: 15 }}>
            <ProductsHeader
              onPress={() => this.props.navigation.navigate('Shops2')}
              title="Extra 20% Off Bestsellers"
              viewStyle={{ borderColor: '#3967DF' }}
              textStyle={{ fontSize: 12, fontWeight: 'bold', color: '#3967DF' }} />
            <ProductsList data={dummy.recommends} style={{ marginTop: 15 }} onPress={()=>this.props.navigation.navigate('Detail2')} />
          </Products>
          <ImageOne image={images.banner33} style={{ marginTop: 10, height: 110}} onPress={() => this.props.navigation.navigate('Shops2')}  />
          <Products style={{ width: wp('100%'), paddingLeft: 15, paddingRight: 15, paddingTop: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: 150, borderWidth: 2 }}>
              <View style={{ width: 8, height: '100%', borderRightWidth: 2, backgroundColor: '#D84E3F' }} />
              <Text style={{  paddingLeft: 10, paddingRight: 10, paddingTop: 2.5, paddingBottom: 2.5, textAlign: 'center', fontSize: 17, fontWeight: 'bold' }}>Shop by style</Text>
            </View>
            <Categories data={dummy.categories3} style={{ marginTop: 15 }} type={3}  onPress={() => this.props.navigation.navigate('Shops2')} />
          </Products>
          <ImageOne image={images.banner34} style={{ marginTop: 10, height: 130, padding: 15}} onPress={() => this.props.navigation.navigate('Shops2')}  />
          <Products style={{ width: wp('100%'), paddingLeft: 15, paddingRight: 15, paddingTop: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: 150, borderWidth: 2 }}>
              <View style={{ width: 8, height: '100%', borderRightWidth: 2, backgroundColor: '#D84E3F' }} />
              <Text style={{  paddingLeft: 10, paddingRight: 10, paddingTop: 2.5, paddingBottom: 2.5, textAlign: 'center', fontSize: 17, fontWeight: 'bold' }}>Shop by age</Text>
            </View>
            <ProductsList6 data={dummy.categories4} style={{ marginTop: 5 }} color='#D84E3F' onPress={() => this.props.navigation.navigate('Shops2')}  />
          </Products>
          <Products style={{ width: wp('100%'), marginTop: 15, paddingLeft: 15, paddingRight: 15 }}>
            <ProductsHeader
              onPress={() => this.props.navigation.navigate('Shops2')}
              title="Backpack Sets"
              viewStyle={{ borderColor: '#3967DF' }}
              textStyle={{ fontSize: 12, fontWeight: 'bold', color: '#3967DF' }} />
            <ProductsList data={dummy.recommends} style={{ marginTop: 15 }}  onPress={() => this.props.navigation.navigate('Detail2')}/>
          </Products>
          <ImageOne image={images.banner35} style={{ marginTop: 15, height: 100}} onPress={() => this.props.navigation.navigate('Shops2')}  />
          <Products style={{ width: wp('100%'), paddingLeft: 15, paddingRight: 15, paddingTop: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: 150, borderWidth: 2 }}>
              <View style={{ width: 8, height: '100%', borderRightWidth: 2, backgroundColor: '#4279BC' }} />
              <Text style={{ width: 130, paddingLeft: 10, paddingRight: 10, paddingTop: 2.5, paddingBottom: 2.5, textAlign: 'center', fontSize: 17, fontWeight: 'bold' }}>Stationery</Text>
            </View>
            <ProductsList6 data={dummy.categories5} style={{ marginTop: 15 }} color='#4279BC'  onPress={() => this.props.navigation.navigate('Shops2')}/>
          </Products>
          <ImageOne image={images.banner36} style={{ marginTop: 15, height: 100}}  onPress={() => this.props.navigation.navigate('Shops2')} />
          <Products style={{ width: wp('100%'), paddingLeft: 15, paddingRight: 15, paddingTop: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: 190, borderWidth: 2 }}>
              <View style={{ width: 8, height: '100%', borderRightWidth: 2, backgroundColor: '#4279BC' }} />
              <Text style={{ width: 180, paddingLeft: 10, paddingRight: 10, paddingTop: 2.5, paddingBottom: 2.5, textAlign: 'center', fontSize: 17, fontWeight: 'bold' }}>Meal Preparation</Text>
            </View>
            <ProductsList7 data={dummy.categories5} style={{ marginTop: 15 }} color='#4279BC'  onPress={() => this.props.navigation.navigate('Shops2')}/>
          </Products>
          <ImageOne image={images.banner37} style={{ marginTop: 15, height: 100}}  onPress={() => this.props.navigation.navigate('Shops2')} />
          <Products style={{ width: wp('100%'), paddingLeft: 15, paddingRight: 15, paddingTop: 15 }}>
            <ProductsList6 data={dummy.categories4} style={{ marginTop: 5 }} color='#D84E3F'  onPress={() => this.props.navigation.navigate('Shops2')}/>
          </Products>
          <Products style={{ width: wp('100%'), paddingLeft: 15, paddingRight: 15, paddingTop: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: 150, borderWidth: 2 }}>
              <View style={{ width: 8, height: '100%', borderRightWidth: 2, backgroundColor: colors.BLACK }} />
              <Text style={{  paddingLeft: 10, paddingRight: 10, paddingTop: 2.5, paddingBottom: 2.5, textAlign: 'center', fontSize: 17, fontWeight: 'bold' }}>Top brands</Text>
            </View>
            <Brands data={dummy.brands} style={{ marginTop: 15 }} onPress={() => this.props.navigation.navigate('Shops2')}  />
          </Products>


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
    width: wp('100%') - 20,
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.GREY.SECONDARY,
    paddingLeft: 5,
    paddingRight: 5
  },
});

export default connect(undefined, undefined)(Deals);
