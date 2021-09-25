import React from 'react';
import {View, Text, TextInput} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {colors} from '../configs/colors';
export default function SearchBar() {
  return (
    <View
      style={{
        backgroundColor: '#FFFF',
        borderRadius: 30,
        marginHorizontal: 20,
        marginVertical: 10,
        height: 57,
        shadowColor: '#fff',
        shadowOffset: {
          width: 6,
          height: 3,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 5,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TextInput
        placeholder="Search here..."
        placeholderTextColor={colors.textColorSearchBar}
      />
      <IonIcons name="md-search" color={colors.searchBarIconColor} size={24} />
    </View>
  );
}
