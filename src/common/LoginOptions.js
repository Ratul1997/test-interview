import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { colors } from '../configs/colors';

export default function LoginOptions({onPress, imageIcon, title}) {
  return (
    <TouchableOpacity
      style={{
        marginHorizontal: 25,
        height: 60,
        borderRadius: 12,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
      }}
      onPress={onPress}>
      <View
        style={{
          width: '20%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={imageIcon} style={{height: 24, width: 24}} />
      </View>
      <Text
        style={{
          color: colors.iconFillColor,
          fontSize: 16,
          width: '80%',
          fontWeight: '500',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
