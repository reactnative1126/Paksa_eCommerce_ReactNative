import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { Card, CategoryItems, ImageOne } from "@components";
import { isEmpty, isCurrency } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons, dummy } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

const Category1 = (props) => {
  return (
    <ScrollView contentContainerStyle={[{ width: wp('100%') - 100 }, { ...props.style }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 50, paddingLeft: 10, paddingRight: 10 }}>
        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Recently Viewed Categories</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 14, color: '#6A8DE7' }}>Clear</Text>
        </TouchableOpacity>
      </View>
      <ImageOne image={images.banner21} style={{ width: '100%', height: 120, padding: 15 }} onPress={props.onPress} />
      <ImageOne image={images.banner22} style={{ width: '100%', height: 120, padding: 15 }} onPress={props.onPress} />
      <CategoryItems data={dummy.data5} onPress={props.onPress} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({

});

export default Category1;
