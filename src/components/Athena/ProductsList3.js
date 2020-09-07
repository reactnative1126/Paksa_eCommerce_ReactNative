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

const ProductsList3 = (props) => {
  return (
    <FlatList style={{ ...props.style }}
      columnWrapperStyle={{ flex: 1, justifyContent: "space-around"}}
      data={props.data}
      numColumns={2}
      keyExtractor={(item, index) => item.id}
      renderItem={(item) => (
        <TouchableOpacity style={{ width: '48%', marginTop: 10 }} onPress={props.onPress}>
          <Image style={{ width: '100%', height: 200 }} source={{ uri: item.item.image }} />
          <View style={{ justifyContent: 'center', widht: '100%', backgroundColor: '#F3ECE6', padding: 10 }}>
            <Text style={{ fontSize: 13, fontWeight: 'bold' }}>{item.item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({

});

export default ProductsList3;
