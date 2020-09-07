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
import { Card, CategoriesItem1, CategoriesItem2, CategoriesItem3 } from "@components";
import { isEmpty, isCurrency } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

const Categories = (props) => {
  return (
    <FlatList
      style={{ ...props.style }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={props.data}
      keyExtractor={(item, index) => item.id}
      renderItem={(item) =>
        props.type == 1 ? <CategoriesItem1 item={item} onPress={props.onPress} /> :
          props.type == 2 ? <CategoriesItem2 item={item} onPress={props.onPress} /> :
            props.type == 3 ? <CategoriesItem3 item={item} onPress={props.onPress} /> : null
      }
    />
  );
};

const styles = StyleSheet.create({

});

export default Categories;
