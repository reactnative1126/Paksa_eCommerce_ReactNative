import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
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

const CategoryView = (props) => {
  return (
    <View>
    <FlatList
      columnWrapperStyle={{
        flex: 1,
        justifyContent: "space-around"
      }}
      data={props.data}
      numColumns={3}
      keyExtractor={(item, index) => item.id}
      renderItem={(item) => (
        <TouchableOpacity style={{ width: '32%', alignItems: 'center' }} onPress={props.onPress}>
          <Image style={{ width: '100%', height: 70 }} source={{ uri: item.item.image }} />
          <View style={{ padding: 5 }}>
            <Text style={{ fontSize: 10, textAlign: 'center' }}>{item.item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default CategoryView;
