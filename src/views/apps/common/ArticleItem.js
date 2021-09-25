import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../../configs/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  checkDataInArray,
  getStoredData,
  timeSince,
} from '../../../utils/utility';
import userServices from '../../../services/userServicess';
import {useSelector, useDispatch} from 'react-redux';
import {addBookMark, removeBookMark} from '../../../store/actions';

export default function ArticleItem({item, type, navigation}) {
  const state = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const onSaveBookMarks = async () => {
    const {error} = await userServices.storeBookMarks(state.uid, item);
    if (error) {
      alert(error);
    } else {
      dispatch(addBookMark(item.id));
      alert('Saved');
    }
  };
  const onRemoveBookMarks = async () => {
    const {error} = await userServices.removeBookMarks(state.uid, item);
    if (error) {
      alert(error);
    } else {
      dispatch(removeBookMark(item.id));
      alert('Removed');
    }
  };

  const onUserAction = () => {
    if (checkDataInArray(state.bookMarks, item.id)) {
      onRemoveBookMarks();
    } else {
      onSaveBookMarks();
    }
  };

  const onNavigateLogin = async () => {
    navigation.navigate('Login');
  };

  return (
    <View style={{height: 110, flexDirection: 'row', marginVertical: 10}}>
      <View
        style={{
          width: '30%',
        }}>
        <Image
          style={{
            backgroundColor: colors.imageBackGroundColor,
            height: 113,
            width: 93,
            borderRadius: 10,
          }}
          source={{uri: item.photo}}
        />
      </View>
      <View
        style={{
          justifyContent: 'space-between',

          width: '70%',
        }}>
        <View>
          <Text
            style={{
              color: colors.textLinkColor,
              fontFamily: 'Roboto-Regular',
              fontSize: 14,
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              color: colors.textColorBlack,
              fontFamily: 'Roboto-Regular',
              fontSize: 14,
            }}
            numberOfLines={2}>
            {item.subheader}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '45%',
            }}>
            <Text style={{color: colors.iconFillColor, fontSize: 12}}>
              <AntDesign name="like2" size={12} /> {item.view_count}
            </Text>

            <Text style={{color: colors.iconFillColor, fontSize: 12}}>
              <MaterialCommunityIcons
                name="clock"
                color={colors.iconFillColor}
                size={14}
              />{' '}
              {timeSince(new Date(item.created_at))}
            </Text>
          </View>
          {type !== 'BookMark' && (
            <TouchableOpacity
              style={{
                justifyContent: 'flex-end',
                flexDirection: 'row',
                width: '45%',
              }}
              onPress={state.uid ? onUserAction : onNavigateLogin}>
              <FontAwesome
                name={
                  checkDataInArray(state.bookMarks, item.id)
                    ? 'bookmark'
                    : 'bookmark-o'
                }
                size={18}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
