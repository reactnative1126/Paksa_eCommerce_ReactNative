import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Image,
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

const ImageSilder = (props) => {
  return (
    <TouchableOpacity style={[styles.imageContainer, { ...props.style }]} onPress={props.onPress}>
      <Swiper
        autoplay={true}
        dotStyle={{ marginBottom: -80, width: 25, height: 3 }}
        activeDotStyle={{ marginBottom: -80, width: 25, height: 3 }}
        dotColor={colors.GREY.ACTIVEDOT}
        activeDotColor={colors.YELLOW.PRIMARY}
      >
        {props.silders.map((item, key) => {
          return (
            <View>
              <Image
                key={key}
                style={styles.image}
                source={item.image}
                resizeMode="stretch"
              />
            </View>
          );
        })}
      </Swiper>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    // shadowColor: colors.BLACK,
    // shadowOffset: { width: 5, height: 0 },
    // shadowOpacity: 0.2,
    // shadowRadius: 10,
    // elevation: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageSilder;
