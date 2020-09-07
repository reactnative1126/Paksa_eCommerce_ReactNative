import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import Swiper from "react-native-swiper";

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

const ProductsHeader = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ ...props.titleStyle }}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      {!isEmpty(props.viewStyle) && (
        <TouchableOpacity style={{ ...styles.viewStyle, ...props.viewStyle }} onPress={props.onPress}>
          <Text style={{ ...props.textStyle }}>VIEW ALL</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#404553'
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 30,
    borderWidth: 2,
  }
});

export default ProductsHeader;
