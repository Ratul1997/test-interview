import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../../configs/colors';
import googleIcon from '../../../../assets/google.png';
import {userAuthActions} from '../../../services/userAuthServices';
import LoginOptions from '../../../common/LoginOptions';
import {useDispatch} from 'react-redux';
import {userLogin} from '../../../store/actions';
export default function Login({navigation}) {
  const dispatch = useDispatch();
  const onGoogleSignIn = async () => {
    const {isNewUser, user, error, providerId} =
      await userAuthActions.googleSignUp();
    if (error) {
      console.log(error.toString());
      alert(error);
    } else {
      dispatch(userLogin(user.uid));
      navigation.goBack();
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          color: colors.textColorBold,
          fontSize: 28,
          fontWeight: 'bold',
        }}>
        Welcome back
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: colors.iconFillColor,
          width: '70%',
          marginVertical: 10,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        temp
      </Text>
      <LoginOptions
        imageIcon={googleIcon}
        title="Sign in with Google"
        onPress={onGoogleSignIn}
      />
    </View>
  );
}
