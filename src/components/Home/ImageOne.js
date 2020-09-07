import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { Card } from "@components";
import { isEmpty, isCurrency } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

const ImageOne = (props) => {
  return (
    <TouchableOpacity style={[{ width: wp('100%')}, {...props.style}]} onPress={props.onPress}>
      <Image style={{ width: '100%', height: '100%' }} source={props.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  
});

export default ImageOne;
