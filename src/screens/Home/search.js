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
import LinearGradient from 'react-native-linear-gradient';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { setUser } from "@modules/auth/actions";
import {
  Loading,
  ImageSilder, ImageOne,
  Categories,
  Products, ProductsHeader, ProductsList, ProductsList2, ProductsList3, ProductsList4, ProductsList5,
  Brands
} from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons, dummy } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

class Search extends Component {
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
            <View style={styles.searchBar}>
              <Icon name="search" type="material" size={25} color={colors.GREY.DARK} />
              <TextInput
                style={{ width: wp('100%') - 120, height: 20, borderColor: 'gray' }}
                placeholder="What are you looking for?"
              />
            </View>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 100 }}
              onPress={() => this.props.navigation.pop()}>
              <Text style={{ fontSize: 15, color: '#35383F' }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Header>

        <Content>
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
    width: wp('100%') - 100,
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.GREY.SECONDARY,
    paddingLeft: 5,
    paddingRight: 5,
  },
});

export default connect(undefined, undefined)(Search);
