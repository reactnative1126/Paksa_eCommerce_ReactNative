import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

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

const ProductsList6 = (props) => {
  return (
    <FlatList style={{ ...props.style }}
      columnWrapperStyle={{ flex: 1, justifyContent: "space-around", marginTop: 10 }}
      data={props.data}
      numColumns={3}
      keyExtractor={(item, index) => item.id}
      renderItem={(item) => (
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={props.onPress}>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10, marginRight: 10, width: wp('28%'), height: 120, backgroundColor: props.color, borderWidth: 2 }}>
            <Image style={{ width: wp('28%') -10, height: 110, borderWidth: 2 }}
              source={{ uri: item.item.image }} />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', width: wp('28%'), height: 40, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2}}>
            <Text style={{ width: wp('29%') - 10, fontSize: 12, fontWeight: 'bold', color: colors.BLACK, textAlign: 'center' }}>{item.item.category}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({

});

export default ProductsList6;
