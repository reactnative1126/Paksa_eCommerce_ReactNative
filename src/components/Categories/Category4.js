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

const Category3 = (props) => {
  return (
    <View style={[{ width: '100%', height: hp('100%') }, { ...props.style }]}>
      <ImageOne image={images.banner33} style={{ width: '100%', height: 120, padding: 15 }} onPress={props.onPress} />
      <Collapse title={"Kitchen Applications"} data={dummy.mobiles1} onPress={props.onPress} />
      <Collapse title={"Iron & Garment Care"} data={dummy.mobiles1} onPress={props.onPress} />
      <Collapse title="Television" data={dummy.mobiles1} />
      <Collapse title={"Home Audio"} data={dummy.mobiles1} onPress={props.onPress} />
      <Collapse title={"eXtra"} data={dummy.mobiles1} onPress={props.onPress} />
      <ImageOne image={images.banner34} style={{ width: '100%', height: 120, padding: 15 }} onPress={props.onPress} />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default Category3;
