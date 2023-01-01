import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../theme';
import Text from '../text/Text';
import Icon from '../icon/Icon';

const Input = ({label, icon, onIconPress, ...props}) => {
  return (
    <View style={styles.container}>
      {label ? (
        <Text isBold={true} style={styles.label}>
          {label}
        </Text>
      ) : null}
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} {...props} />
        {icon ? <Icon onPress={onIconPress} name={icon} size={20} /> : null}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  input: {
    fontFamily: fonts.Normal,
    fontSize: 18,
    flex: 1,
    justifyContent: 'center',
    
  },
  label: {
    paddingBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderRadius: 7,
    borderColor: colors.grayLight,
    borderWidth: 2,
    paddingVertical: 10,
    alignItems: 'center',
    
  },
});
