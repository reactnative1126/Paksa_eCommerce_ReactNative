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

const ProductsList = (props) => {
  return (
    <FlatList
      style={{ ...props.style }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={props.data}
      keyExtractor={(item, index) => item.id}
      renderItem={(item) => (
        <TouchableOpacity style={{ marginLeft: 5, marginRight: 5, padding: 5, width: 150, borderWidth: 1, borderColor: colors.GREY.SECONDARY, backgroundColor: colors.WHITE }}
          onPress={props.onPress}>
          {!isEmpty(item.item.saving) && (
            <View style={{ position: 'absolute', marginLeft: 0, marginTop: 0, width: 110, height: 30, backgroundColor: '#BC0E0B', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
              <Text style={{ fontSize: 10, color: colors.WHITE }}>Extra {item.item.saving}% Off! Code: SAVING</Text>
            </View>
          )}
          <TouchableOpacity style={{ width: '100%', alignItems: 'flex-end' }}>
            <Icon name="heart-outline" type="material-community" size={20} color="#9FA1AF" />
          </TouchableOpacity>
          <Image style={{ marginLeft: 15, width: 110, height: 150 }} source={item.item.image} />
          <Text style={{ marginTop: 20, fontSize: 12, color: colors.GREY.DARK }}>{item.item.description}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginTop: 5 }}>
            <Text style={{ fontSize: 10, color: '#444' }} >SAR</Text>
            <Text style={{ marginLeft: 5, fontSize: 16, fontWeight: 'bold', color: '#333' }}>{item.item.price}</Text>
          </View>
          {isEmpty(item.item.price2) ? <View><Text style={{ fontSize: 12 }}></Text></View> : <View style={{ marginLeft: 2, flexDirection: 'row', alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 10, color: '#AAA', textDecorationLine: 'line-through' }}>SAR</Text>
            <Text style={{ marginLeft: 5, fontSize: 12, fontWeight: 'bold', color: '#AAA', textDecorationLine: 'line-through' }}>{item.item.price2}</Text></View>
          }
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            {item.item.express && <Image style={{ width: 60, height: 20 }} source={images.express} />}
            {isEmpty(item.item.percent) ? null :
              <View style={{ marginLeft: 5, width: 50, height: 15, backgroundColor: '#DCECD4', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 10, fontWeight: '500', color: '#62A04F' }}>{item.item.percent}% OFF</Text>
              </View>
            }
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({

});

export default ProductsList;
