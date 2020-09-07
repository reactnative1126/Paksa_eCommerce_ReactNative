import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text, ScrollView, TextInput, FlatList, TouchableOpacity } from "react-native";
import { Container, Header, Body, Content } from 'native-base';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { setUser } from "@modules/auth/actions";
import { Loading, Category1, Category2, Category3, Category4 } from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons, dummy } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      categoryName: "Just for you"
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
        <View style={{ flexDirection: 'row', width: wp('100%'), height: hp('100%') }}>
          <View style={{ width: 100, height: hp('100%'), backgroundColor: '#F6F6F6' }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={dummy.categoryList}
              keyExtractor={(item, index) => item.id}
              renderItem={(item) => (
                <TouchableOpacity style={[styles.leftView, {
                  backgroundColor: item.item.categoryName === this.state.categoryName ? colors.WHITE : '#F6F6F6',
                  borderLeftColor: item.item.categoryName === this.state.categoryName ? colors.BLACK : '#F6F6F6',

                }]} onPress={() => this.setState({ categoryName: item.item.categoryName })}>
                  <Text style={{
                    fontSize: 12, textAlign: 'center',
                    fontWeight: item.item.categoryName === this.state.categoryName ? 'bold' : null
                  }}>{item.item.categoryName}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <ScrollView contentContainerStyle={{ width: wp('100%') - 100 }}>
            {this.state.categoryName == 'Just for you' && <Category1 category={this.state.categoryName} style={{ padding: 5 }} onPress={() => this.props.navigation.navigate('Shops1')} />}
            {this.state.categoryName == 'Mobiles & Accessories' && <Category2 category={this.state.categoryName} style={{ padding: 5 }} onPress={() => this.props.navigation.navigate('Shops1')} />}
            {this.state.categoryName == 'Electronics' && <Category3 category={this.state.categoryName} style={{ padding: 5 }} onPress={() => this.props.navigation.navigate('Shops1')} />}
            {this.state.categoryName == 'TVs & Appliances' && <Category4 category={this.state.categoryName} style={{ padding: 5 }} onPress={() => this.props.navigation.navigate('Shops1')} />}
            {this.state.categoryName == 'Women\'s Fashion' && <Category1 category={this.state.categoryName} style={{ padding: 5 }} onPress={() => this.props.navigation.navigate('Shops1')} />}
            {this.state.categoryName == 'Men\'s Fashion' && <Category2 category={this.state.categoryName} style={{ padding: 5 }} onPress={() => this.props.navigation.navigate('Shops1')} />}
            {this.state.categoryName == 'Home & Kitchen' && <Category3 category={this.state.categoryName} style={{ padding: 5 }} onPress={() => this.props.navigation.navigate('Shops1')} />}
            {this.state.categoryName == 'Watches, Bags & Accessories' && <Category4 category={this.state.categoryName} style={{ padding: 5 }} onPress={() => this.props.navigation.navigate('Shops1')} />}
            {this.state.categoryName == 'Fragrance' && <Category1 category={this.state.categoryName} style={{ padding: 5 }} onPress={() => this.props.navigation.navigate('Shops1')} />}
            {this.state.categoryName == 'Beauty & Personal Care' && <Category2 category={this.state.categoryName} style={{ padding: 5 }} onPress={() => this.props.navigation.navigate('Shops1')} />}
            {this.state.categoryName == 'Kids, Baby Products & Toy' && <Category3 category={this.state.categoryName} style={{ padding: 5 }} onPress={() => this.props.navigation.navigate('Shops1')} />}
            {this.state.categoryName == 'Sports & Fitness' && <Category4 category={this.state.categoryName} style={{ padding: 5 }} onPress={() => this.props.navigation.navigate('Shops1')} />}
            {this.state.categoryName == 'Office Supplies, Books & Media' && <Category3 category={this.state.categoryName} style={{ padding: 5 }} onPress={() => this.props.navigation.navigate('Shops1')} />}
            {this.state.categoryName == 'Automotive' && <Category4 category={this.state.categoryName} style={{ padding: 5 }} onPress={() => this.props.navigation.navigate('Shops1')} />}
          </ScrollView>
        </View>
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
  leftView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 5,
    backgroundColor: '#F6F6F6',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F3F3',
    borderLeftWidth: 5,
    borderLeftColor: '#F6F6F6'
  }
});

export default connect(undefined, undefined)(Categories);
