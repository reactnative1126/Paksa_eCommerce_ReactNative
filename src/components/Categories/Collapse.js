import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View, Image, TouchableOpacity, Text, FlatList } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { Card, CategoryItems, ImageOne } from "@components";
import { isEmpty, isCurrency } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons, dummy } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

const Collapse = (props) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <View style={[{ width: '100%' }, { ...props.style }]}>
      <TouchableOpacity style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }} onPress={() => setCollapse(!collapse)}>
        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#444' }}>{props.title}</Text>
        <Icon name={collapse ? "keyboard-arrow-up" : "keyboard-arrow-down"} type="material" size={20} color={'#444'} />
      </TouchableOpacity>
      {collapse &&
        <FlatList style={{ ...props.style }}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-around", padding: 10 }}
          data={props.data}
          numColumns={3}
          keyExtractor={(item, index) => item.id}
          renderItem={(item) => (
            <TouchableOpacity style={{ alignItems: 'center', width: wp('19%'), height: wp('19%'), backgroundColor: '#EEE' }} onPress={props.onPress}>
              <Image style={{ width: '100%', height: '100%' }} source={item.item.image} />
            </TouchableOpacity>
          )}
        />}
    </View>
  );
};

const styles = StyleSheet.create({

});

export default Collapse;
