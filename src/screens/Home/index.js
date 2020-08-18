import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Container, Header, Body, Content } from 'native-base';
import Swiper from "react-native-swiper";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { setUser } from "@modules/auth/actions";
import { Loading } from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

const bannerImages = [
  { image: images.banner1 },
  { image: images.banner2 },
  { image: images.banner3 },
  { image: images.banner4 },
  { image: images.banner5 },
]

const categories = [
  { category: "FASHION", image: "https://www.elle.com/runway/g31209769/chanel-fall2020-collection/" },
  { category: "TOY & GAMES", image: "https://www.inventorsdigest.com/wp-content/uploads/2019/12/Iconic-Patented-Toys.jpg" },
  { category: "MOBILES", image: "https://www.android.com/static/2016/img/one/carousel/nokia_5_3_1x.png" },
  { category: "HOME & KITCHEN", image: "" },
  { category: "CATEGORY1", image: "" },
  { category: "CATEGORY2", image: "" },
  { category: "CATEGORY3", image: "" },
  { category: "CATEGORY4", image: "" },
]

const recommends = [
  { image: images.watch1, description: "Geneva Women's Water Resistant Leather Ana...", price: '10.90' },
  { image: images.watch2, description: "Geneva Women's Water Resistant Leather Ana...", price: '200.30' },
  { image: images.watch3, description: "Geneva Women's Water Resistant Leather Ana...", price: '35.40' },
  { image: images.watch4, description: "Geneva Women's Water Resistant Leather Ana...", price: '234.00' },
  { image: images.watch5, description: "Geneva Women's Water Resistant Leather Ana...", price: '123.90' },
  { image: images.watch6, description: "Geneva Women's Water Resistant Leather Ana...", price: '534.90' },
  { image: images.watch7, description: "Geneva Women's Water Resistant Leather Ana...", price: '43.90' }
]
const extras = [
  { image: images.extra3, description: "Geneva Women's Water Resistant Leather Ana...", price: '624.90', price2: '749.00', percent: '16' },
  { image: images.extra1, description: "Geneva Women's Water Resistant Leather Ana...", price: '1,032.90', price2: '', percent: '' },
  { image: images.extra4, description: "Geneva Women's Water Resistant Leather Ana...", price: '137.90', price2: '', percent: '' },
  { image: images.extra5, description: "Geneva Women's Water Resistant Leather Ana...", price: '430.90', price2: '', percent: '' },
  { image: images.extra2, description: "Geneva Women's Water Resistant Leather Ana...", price: '310.90', price2: '', percent: '' }
]

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
        <Header style={styles.header}>
          <View style={styles.headerBar}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: 120 }}>
              <Image style={{ width: 30, height: 30, marginLeft: 10, marginRight: 10, borderRadius: 5 }} source={images.logo} />
              <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#35383F' }}>noon</Text>
            </View>
            <View style={styles.searchBar}>
              <Icon name="search" type="material" size={25} color={colors.GREY.DARK} />
              <TextInput
                style={{ width: wp('100%') - 200, height: 20, borderColor: 'gray' }}
                placeholder="What are you looking for?"
              // onChangeText={text => onChangeText(text)}
              // value={value}
              />
            </View>
          </View>
        </Header>
        <Content>
          <View style={styles.imageContainer}>
            <Swiper
              autoplay={true}
              dotStyle={{ marginBottom: -80, width: 20, height: 3 }}
              activeDotStyle={{ marginBottom: -80, width: 20, height: 3 }}
              dotColor={colors.GREY.DARK}
              activeDotColor={colors.YELLOW.PRIMARY}
            >
              {bannerImages.map((item, key) => {
                return (
                  <View>
                    <Image
                      key={key}
                      style={styles.image}
                      source={item.image}
                      resizeMode="stretch"
                    />
                  </View>
                );
              })}
            </Swiper>
          </View>
          <FlatList
            style={{ marginTop: 30 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={(item, key) => (
              <TouchableOpacity key={key} style={{ alignItems: 'center' }}>
                <Image style={{ marginLeft: 10, marginRight: 10, width: 70, height: 70, borderRadius: 35, borderWidth: 1, borderColor: colors.YELLOW.PRIMARY }}
                  source={{ uri: item.item.image }} />
                <Text style={{ fontSize: 10, fontWeight: 'bold', color: colors.DARK }}>{item.item.category}</Text>
              </TouchableOpacity>
            )}
          />
          <Text style={{ marginTop: 20, marginLeft: 10, fontSize: 14, fontWeight: 'bold', color: '#333' }}>Recommended For You</Text>
          <FlatList
            style={{ marginTop: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={recommends}
            renderItem={(item, key) => (
              <TouchableOpacity key={key} style={{ marginLeft: 10, padding: 5, width: 150, height: 300, borderWidth: 1, borderColor: colors.GREY.SECONDARY }}>
                <TouchableOpacity style={{ width: '100%', alignItems: 'flex-end' }}>
                  <Icon name="heart-outline" type="material-community" size={20} />
                </TouchableOpacity>
                <Image style={{ marginLeft: 15, width: 110, height: 150 }} source={item.item.image} />
                <Text style={{ marginTop: 20, fontSize: 12, color: colors.GREY.DARK }}>{item.item.description}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                  <Text style={{ fontSize: 10, color: colors.GREY.DARK }} >SAR</Text>
                  <Text style={{ marginLeft: 5, fontSize: 16, fontWeight: 'bold', color: '#333' }}>{item.item.price}</Text>
                </View>
                <Image style={{ marginTop: 20, width: 60, height: 20 }} source={images.express} />
              </TouchableOpacity>
            )}
          />
          <View style={{ marginTop: 20, marginBottom: 20, marginLeft: 10, justifyContent: 'center', alignItems: 'center', width: 120, backgroundColor: '#FCD291' }}>
            <Text style={{ fontSize: 20, fontWeight: '900' }}>AT HOME?</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, width: wp('100%') - 20 }}>
            <Image style={{ width: wp('46%'), height: wp('40%') }} source={images.home1} resizeMode="stretch" />
            <Image style={{ width: wp('46%'), height: wp('40%') }} source={images.home2} resizeMode="stretch" />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginLeft: 10, marginRight: 10, width: wp('100%') - 20 }}>
            <Image style={{ width: wp('46%'), height: wp('40%') }} source={images.home3} resizeMode="stretch" />
            <Image style={{ width: wp('46%'), height: wp('40%') }} source={images.home4} resizeMode="stretch" />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: '900', color: '#555' }}>Extra 10% Off - Limited Time Only!</Text>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: 80, height: 30, borderWidth: 2, borderColor: colors.BLUE.PRIMARY }}>
              <Text style={{ fontWeight: '600', color: colors.BLUE.PRIMARY }}>View All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={{ marginTop: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={extras}
            renderItem={(item, key) => (
              <TouchableOpacity key={key} style={{ marginLeft: 10, padding: 5, width: 150, height: 300, borderWidth: 1, borderColor: colors.GREY.SECONDARY }}>
                <View style={{ position: 'absolute', marginLeft: 0, marginTop: 0, width: 110, height: 30, backgroundColor: '#BC0E0B', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
                  <Text style={{ fontSize: 10, color: colors.WHITE }}>Extra 10% Off! Code: SAVING</Text>
                </View>
                <TouchableOpacity style={{ width: '100%', alignItems: 'flex-end' }}>
                  <Icon name="heart-outline" type="material-community" size={20} />
                </TouchableOpacity>
                <Image style={{ marginLeft: 15, width: 110, height: 150 }} source={item.item.image} />
                <Text style={{ marginTop: 20, fontSize: 12, color: colors.GREY.DARK }}>{item.item.description}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                  <Text style={{ fontSize: 8, color: colors.GREY.DARK }} >SAR</Text>
                  <Text style={{ marginLeft: 2, fontSize: 12, fontWeight: 'bold', color: '#333' }}>{item.item.price}</Text>
                  {isEmpty(item.item.price2) ? null : <View style={{ marginLeft: 2, flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: 6, color: colors.GREY.DARK, textDecorationLine: 'line-through' }}>SAR</Text>
                    <Text style={{ marginLeft: 2, fontSize: 10, color: '#555', textDecorationLine: 'line-through' }}>{item.item.price2}</Text></View>
                  }
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
                  <Image style={{ width: 60, height: 20 }} source={images.express} />
                  {isEmpty(item.item.percent) ? null :
                    <View style={{width: 50, height: 15, backgroundColor: '#DCECD4', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 10, fontWeight: '500', color: '#62A04F'}}>{item.item.percent}% OFF</Text>
                    </View>
                  }
                </View>
              </TouchableOpacity>
            )}
          />
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
    backgroundColor: colors.GREY.PRIMARY
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
  imageContainer: {
    width: "100%",
    height: 160,
    shadowColor: colors.BLACK,
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default connect(undefined, undefined)(Home);
