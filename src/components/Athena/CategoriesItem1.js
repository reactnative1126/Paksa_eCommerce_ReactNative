import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  FlatList,
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

const CategoriesItem1 = ({onPress, item, index}) => {
  return (
    <TouchableOpacity style={{ alignItems: 'center' }} onPress={onPress}>
      <Image style={{ marginLeft: 10, marginRight: 10, width: 70, height: 70, backgroundColor: '#F6F6F6', borderRadius: 35, borderWidth: 1.5, borderColor: colors.YELLOW.PRIMARY }}
        source={{ uri: item.item.image }} />
      <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#404553', textAlign: 'center' }}>{item.item.category}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

});

export default CategoriesItem1;
