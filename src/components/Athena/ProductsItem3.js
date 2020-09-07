import React, { useState } from "react";
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

const ProductsItem3 = (props) => {
  const [quantityStatus, setQuantityStatus] = useState(false);
  const [quantity, setQuantity] = useState(1);
  return (
    <TouchableOpacity style={{ marginTop: 5, padding: 10, width: wp('100%'), borderWidth: 1, borderColor: '#AAA', backgroundColor: colors.WHITE }}
      onPress={props.onPress}>
      <Text style={{ color: '#444' }}>{props.item.type}</Text>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <View style={{ width: wp('65%') }}>
          <Text style={{ fontWeight: 'bold', color: '#444' }}>{props.item.title}</Text>
          <Text style={{ marginTop: 10, fontSize: 20, fontWeight: 'bold', color: '#444' }}>AED {props.item.price}</Text>
          <View style={{ marginTop: 10, flexDirection: 'row' }}>
            <Text style={{ color: '#444' }}>Order in the next </Text>
            <Text style={{ color: '#444', fontWeight: 'bold' }}>{props.item.time}</Text>
            <Text style={{ color: '#444' }}> and</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: '#444' }}>receive it by </Text>
            <Text style={{ color: '#39AE05', fontWeight: 'bold' }}>{props.item.time}</Text>
          </View>
        </View>
        <View style={{ width: wp('30%'), height: 100, justifyContent: 'center', alignItems: 'center' }} >
          <Image style={{ width: 80, height: 100 }} source={{ uri: props.item.image }} />
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: '#444' }}>Sold by </Text>
          <Text style={{ color: '#444', fontWeight: 'bold' }}>{props.item.sold}</Text>
        </View>
        <Image source={images.express} style={{ width: 70, height: 20 }} />
      </View>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderWidth: 1, borderColor: quantityStatus ? '#414141' : '#EEE', width: 60 }}
          onPress={() => setQuantityStatus(!quantityStatus)}
        >
          <Text style={{ fontWeight: 'bold', color: '#414141' }}>{quantity}</Text><Icon name="keyboard-arrow-down" type="material" size={15} color="#414141" />
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderWidth: 0, borderColor: '#EEE', width: 100 }}>
          <Icon name="delete" type="material" size={20} color="#999" /><Text style={{ color: '#999' }}>Remove</Text>
        </TouchableOpacity>
      </View>
      {quantityStatus &&
        <View style={{ width: '100%', flexDirection: 'row', marginTop: 10 }}>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10, borderWidth: 1, borderColor: '#EEE', width: 50, backgroundColor: quantity == 1 ? '#3866DF' : colors.WHITE }} onPress={() => {
            setQuantity(1)
            setQuantityStatus(false);
          }}>
            <Text style={{ fontWeight: 'bold', color: '#414141', color: quantity == 1 ? colors.WHITE : '#414141' }}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 10, justifyContent: 'center', alignItems: 'center', padding: 10, borderWidth: 1, borderColor: '#EEE', width: 50, backgroundColor: quantity == 2 ? '#3866DF' : colors.WHITE }} onPress={() => {
            setQuantity(2)
            setQuantityStatus(false);
          }}>
            <Text style={{ fontWeight: 'bold', color: '#414141', color: quantity == 2 ? colors.WHITE : '#414141' }}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 10, justifyContent: 'center', alignItems: 'center', padding: 10, borderWidth: 1, borderColor: '#EEE', width: 50, backgroundColor: quantity == 3 ? '#3866DF' : colors.WHITE }} onPress={() => {
            setQuantity(3)
            setQuantityStatus(false);
          }}>
            <Text style={{ fontWeight: 'bold', color: '#414141', color: quantity == 3 ? colors.WHITE : '#414141' }}>3</Text>
          </TouchableOpacity>
        </View>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

});

export default ProductsItem3;
