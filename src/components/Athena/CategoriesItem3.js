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

const CategoriesItem3 = ({ onPress, item, index }) => {
  return (
    <TouchableOpacity style={{ alignItems: 'center' }} onPress={onPress}>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10, marginRight: 10, width: 100, height: 100, backgroundColor: '#D84E3F', borderWidth: 2 }}>
        <Image style={{ width: 90, height: 90, backgroundColor: '#F6F6F6', borderWidth: 2 }}
          source={{ uri: item.item.image }} />
      </View>
      <View style={{ width: 100, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, padding: 5 }}>
        <Text style={{ fontSize: 12, fontWeight: 'bold', color: colors.BLACK, textAlign: 'center' }}>{item.item.category}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

});

export default CategoriesItem3;
