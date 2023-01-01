import {ActivityIndicator, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import Text from '../text/Text';
import {colors} from '../../theme';

const Button = ({label, onPress, disabled, isLoading, isOutlined}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || isLoading}
      style={styles.container(isOutlined, isLoading)}>
      {isLoading ? (
        <ActivityIndicator
          style={styles.label}
          size={'large'}
          color={colors.secoundry}
        />
      ) : (
        <Text isBold={true} style={styles.label(isOutlined)}>
          {label}
        </Text>
      )}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (isOutlined, isLoading) => ({
    backgroundColor: isOutlined || isLoading ? colors.white : colors.secoundry,
    borderRadius: 7,
    borderWidth: isLoading ? 0 : 2,
    borderColor: colors.secoundry,
    // alignItems: 'center',
    // justifyContent: 'center'
  }),
  label: (isOutlined) => ({
    color: isOutlined ? colors.secoundry : colors.white,
    fontSize: 22,
    paddingHorizontal: 35,
    paddingTop: 7,
    paddingBottom: 9,
    // paddingVertical: 10,
    textAlign: 'center',
  }),
});
