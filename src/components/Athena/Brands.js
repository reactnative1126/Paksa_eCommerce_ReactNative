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

const Brands = (props) => {
  return (
    <FlatList
      style={{ ...props.style }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={props.data}
      renderItem={(item, key) => (
        <TouchableOpacity key={key} style={styles.container} onPress={props.onPress}>
          <Image style={{ width: 120, height: 70 }}
            source={item.item.image} />
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    width: 130,
    backgroundColor: colors.BLACK,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: colors.YELLOW.PRIMARY
  }
});

export default Brands;
