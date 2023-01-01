import {StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from '../icon/Icon';
import Text from '../text/Text';

const IconInfo = ({icon, label}) => {
  return (
    <View style={styles.container}>
      <Icon height={15} size={15} name={icon} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default IconInfo;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 3
    },
    label: {
        paddingStart: 10,
        paddingBottom: 3
    }
});
