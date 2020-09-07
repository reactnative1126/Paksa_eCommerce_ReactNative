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

const ProductsList2 = (props) => {
  return (
    <FlatList style={{ ...props.style }}
      columnWrapperStyle={{ flex: 1, justifyContent: "space-around", marginTop: 5 }}
      data={props.data}
      numColumns={2}
      keyExtractor={(item, index) => item.id}
      renderItem={(item) => (
        <TouchableOpacity style={{ width: '48%', height: 180 }} onPress={props.onPress}>
          <LinearGradient colors={['#F0F7FC', '#FDE3D2']} style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', borderRadius: 10 }}>
            <Image style={{ width: '100%' }} source={{ uri: item.item.image }} style={{ width: '70%', height: '60%' }} />
            <Text style={{ marginTop: 5, fontSize: 12, fontWeight: 'bold', textAlign: 'center' }}>{item.item.title}</Text>
            <Text style={{ fontSize: 10, textAlign: 'center' }}>{item.item.description}</Text>
          </LinearGradient>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({

});

export default ProductsList2;
