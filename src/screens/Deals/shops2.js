import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Container, Header, Body, Content } from 'native-base';
import Grid from 'react-native-infinite-scroll-grid';
import Modal from 'react-native-modalbox';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { setUser } from "@modules/auth/actions";
import { Loading, ImageOne, Categories, Products, ProductsHeader, ProductsItem1, ProductsItem2 } from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons, dummy } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

class Shops2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      express: false,
      filter: false,
      sort: false,
      view: 1,
      sort_modal: false,
      sorting: 'Popularity',
      loadingMore: false,
      refreshing: false,
    };
  }

  renderSortModal() {
    return (
      <Modal
        position={'bottom'}
        backdrop={true}
        style={{ width: wp('100%'), height: 300, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
        ref={'sort_modal'}
      // onClosed={this.props.onClose}
      >
        <View style={{ width: wp('100%') }}>
          <TouchableOpacity style={{ position: 'absolute', top: -20, right: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.WHITE, width: 40, height: 40, borderRadius: 20 }}
            onPress={() => this.refs.sort_modal.close()}>
            <Icon name="close" type="material" size={25} color='#7581A7' />
          </TouchableOpacity>
          <View style={{ padding: 20 }} />
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 60, borderBottomWidth: 1, borderBottomColor: '#F0F2F7', padding: 20 }}
            onPress={() => {
              this.setState({ sorting: 'Popularity' });
              this.refs.sort_modal.close();
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#444', fontWeight: this.state.sorting === 'Popularity' ? 'bold' : 'normal' }}>Popularity</Text>
            </View>
            <View style={{
              justifyContent: 'center', alignItems: 'center',
              width: 20, height: 20, borderRadius: 10, borderColor: '#7581A7', borderWidth: 0.5,
              backgroundColor: this.state.sorting === 'Popularity' ? '#3866DF' : colors.WHITE
            }}>
              <Icon name="check" type="material" size={15} color={colors.WHITE} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 60, borderBottomWidth: 1, borderBottomColor: '#F0F2F7', padding: 20 }}
            onPress={() => {
              this.setState({ sorting: 'HighToLow' });
              this.refs.sort_modal.close();
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#444', fontWeight: this.state.sorting === 'HighToLow' ? 'bold' : 'normal' }}>Price: High to Low</Text>
            </View>
            <View style={{
              justifyContent: 'center', alignItems: 'center',
              width: 20, height: 20, borderRadius: 10, borderColor: '#7581A7', borderWidth: 0.5,
              backgroundColor: this.state.sorting === 'HighToLow' ? '#3866DF' : colors.WHITE
            }}>
              <Icon name="check" type="material" size={15} color={colors.WHITE} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 60, borderBottomWidth: 1, borderBottomColor: '#F0F2F7', padding: 20 }}
            onPress={() => {
              this.setState({ sorting: 'LowToHigh' });
              this.refs.sort_modal.close();
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#444', fontWeight: this.state.sorting === 'LowToHigh' ? 'bold' : 'normal' }}>Price: Low To High</Text>
            </View>
            <View style={{
              justifyContent: 'center', alignItems: 'center',
              width: 20, height: 20, borderRadius: 10, borderColor: '#7581A7', borderWidth: 0.5,
              backgroundColor: this.state.sorting === 'LowToHigh' ? '#3866DF' : colors.WHITE
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
        <View style={styles.statusBar}>
          <TouchableOpacity style={{ paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}
            onPress={() => this.setState({ express: !this.state.express })}>
            <Image source={images.express} style={{ width: 80, height: 20 }} />
            <Icon name={this.state.express ? "check-box" : "check-box-outline-blank"} type="material" size={20} color={this.state.express ? colors.BLUE.DEFAULT : colors.GREY.DARK} />
          </TouchableOpacity>
          <View style={{ width: 1, height: '100%', backgroundColor: colors.GREY.DARK }} />
          <TouchableOpacity style={{ paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}
            onPress={() => this.props.navigation.push('Filters')}>
            <Text style={{ fontWeight: 'bold', color: colors.GREY.DARK }}> FILTER </Text>
            <Icon name="filter-outline" type="material-community" size={20} color={colors.GREY.DARK} />
          </TouchableOpacity>
          <View style={{ width: 1, height: '100%', backgroundColor: colors.GREY.DARK }} />
          <TouchableOpacity style={{ paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}
            onPress={() => this.refs.sort_modal.open()}>
            <Text style={{ fontWeight: 'bold', color: colors.GREY.DARK }}> SORT </Text>
            <Icon name="filter-variant" type="material-community" size={20} color={colors.GREY.DARK} />
          </TouchableOpacity>
          <View style={{ width: 1, height: '100%', backgroundColor: colors.GREY.DARK }} />
          <TouchableOpacity style={{ paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}
            onPress={() => this.setState({ view: this.state.view == 2 ? 1 : 2 })}>
            {this.state.view == 2 ?
              <Icon name="format-list-bulleted" type="material" size={20} color={colors.GREY.DARK} /> :
              <Icon name="view-grid-outline" type="material-community" size={20} color={colors.GREY.DARK} />}
          </TouchableOpacity>
        </View>
        <Content>
          <ImageOne image={images.banner04} style={{ height: 100 }} />
          <Products style={{ width: wp('100%'), paddingLeft: 15, paddingRight: 15, paddingTop: 15 }}>
            <ProductsHeader title="Shop By Category" />
            <Categories data={dummy.categories} style={{ marginTop: 15 }} type={1} />
          </Products>

          <View style={{ width: wp('100%'), marginTop: 15 }}>
            <Grid
              numColumns={this.state.view}
              key={this.state.view}
              data={dummy.recommends}
              keyExtractor={item => item.id}
              renderItem={({ item, index }) => {
                return (
                    this.state.view == 2 ? <ProductsItem1 item={item} onPress={()=>this.props.navigation.navigate('Detail2')}  /> : <ProductsItem2 item={item} onPress={()=>this.props.navigation.navigate('Detail2')}  />
                )
              }}
              onRefresh={() => console.log('OK')}
              refreshing={this.state.refreshing}
              // onEndReached={() => alert("End")}
              loadingMore={this.state.loadingMore}
            />
          </View>
        </Content>
        {this.renderSortModal()}
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
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "100%",
    height: 40,
    padding: 10,
    // shadowColor: colors.BLACK,
    // shadowOffset: { width: 5, height: 0 },
    // shadowOpacity: 0.2,
    // shadowRadius: 10,
    // elevation: 10,
  },
});

export default connect(undefined, undefined)(Shops2);
