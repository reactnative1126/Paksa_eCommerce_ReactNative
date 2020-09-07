import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Image,
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

const CategoriesItem2 = ({ onPress, item, index }) => {
  return (
    <TouchableOpacity style={{ alignItems: 'center' }} onPress={onPress}>
      <Image style={{ marginLeft: 10, marginRight: 10, width: 90, height: 90, backgroundColor: '#F6F6F6', borderRadius: 45, borderWidth: 2 }}
        source={{ uri: item.item.image }} />
      <View style={{ marginTop: 5, width: '90%', height: 30, borderWidth: 2 }}>
        <View style={{ width: '100%', padding: 5, backgroundColor: '#F0F20F' }}>
          <Text style={{ fontSize: 9, fontWeight: 'bold', color: colors.BLACK, textAlign: 'center' }}>{item.item.category}</Text>
        </View>
        <View style={{ width: '100%', height: 6, borderTopWidth: 2 }} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

});

export default CategoriesItem2;
