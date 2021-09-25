import React from 'react';
import {View, Text} from 'react-native';
import {colors} from '../configs/colors';
import Entypo from 'react-native-vector-icons/Entypo';
export default function Header({title, onPress, type}) {
  return (
    <View
      style={{
        height: 80,
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 10,
        alignItems: 'flex-end',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 28,
            color: colors.textColorBold,
            fontFamily: 'Roboto-Bold',
            alignSelf: 'baseline',
          }}>
          {title}
        </Text>
        {type === 'BookMarks' && (
          <Entypo
            name="menu"
            color={colors.iconFillColor}
            size={34}
            onPress={onPress}
          />
        )}
      </View>
    </View>
  );
}
