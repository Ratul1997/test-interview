import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../configs/colors';

export default function FloatingButton({children}) {
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        bottom: 30,
        right: 20,
        backgroundColor: colors.floatingButtonColor,
        height: 50,
        width: 140,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {children}
    </TouchableOpacity>
  );
}
