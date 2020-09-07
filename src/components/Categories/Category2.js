import React from "react";
import { Platform, StatusBar, StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { Card, CategoryItems, ImageOne, Collapse } from "@components";
import { isEmpty, isCurrency } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons, dummy } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

const Category2 = (props) => {
  return (
    <View style={[{ width: '100%', height: hp('100%') }, { ...props.style }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingLeft: 10, paddingRight: 10 }}>
        <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>this.props.navigation.navigate('Shops1')}>
          <Image source={images.home1}  style={{width: wp('50%') - 70, height: 100}} />
          <Text style={{fontSize: 10}}>Mobile Store</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>this.props.navigation.navigate('Shops1')}>
          <Image source={images.home2}  style={{width: wp('50%') - 70, height: 100}} />
          <Text style={{fontSize: 10}}>Accessries Store</Text>
        </TouchableOpacity>
      </View>
      <Collapse title="Shop Mobiles by Price" data={dummy.mobiles1} onPress={props.onPress}/>
      <Collapse title="Tablets" data={dummy.mobiles1} onPress={props.onPress}/>
      <ImageOne image={images.banner21} style={{ width: '100%', height: 120, padding: 15 }} onPress={props.onPress}/>
      <Collapse title="Mobile Accessories" data={dummy.mobiles1}/>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default Category2;
