import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FloatingButton from '../../../common/FloatingButton';
import Header from '../../../common/Header';
import SearchBar from '../../../common/SearchBar';
import {colors} from '../../../configs/colors';
import ArticleList from './ArticleList';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function Articles({navigation}) {
  const onPressMenu = () => {
    navigation.navigate('BookMarks');
  };
  return (
    <View style={{flex: 1}}>
      <Header title="Articles" onPress={onPressMenu} type="BookMarks" />
      <SearchBar />
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          marginBottom: 10,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            color: colors.textColorBold,
            fontSize: 20,
            fontFamily: 'Roboto-Bold',
            fontWeight: 'bold',
          }}>
          Newest
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: colors.textLinkColor,
              fontSize: 14,
              fontFamily: 'Roboto-Bold',
              fontWeight: 'bold',
            }}>
            More
          </Text>
        </TouchableOpacity>
      </View>
      <ArticleList navigation={navigation} />
      <FloatingButton>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <MaterialIcons
            name="edit"
            color="white"
            size={18}
            style={{padding: 3}}
          />
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: 16,
              color: colors.textColorWhite,
            }}>
            New Post
          </Text>
        </View>
      </FloatingButton>
    </View>
  );
}
