import {StyleSheet, Text as RNText, View} from 'react-native';
import React, { useMemo } from 'react';
import { colors, fonts } from '../../theme';

const Text = ({children, style, isBold, isSemiBold, }) => {

  const textStyle = useMemo(() => {
    const textStyle = [styles.normal]
    if(isBold){
      textStyle.push(styles.bold)
    }
    if(isSemiBold){
      textStyle.push(styles.semiBold)
    }

    if(style){
      textStyle.push(style)
    }
    
    return textStyle

  }, [isBold, isSemiBold, style])

  return <RNText style={textStyle}>{children}</RNText>;
};

export default Text;

const styles = StyleSheet.create({
  normal: {
    fontSize: 14,
    fontFamily: fonts.Normal,
    color: colors.charcoal,
    letterSpacing: 0,

  },
  bold: {
    fontFamily: fonts.Bold,
  },
  semiBold: {
      fontFamily: fonts.SemiBold,
  }
});
