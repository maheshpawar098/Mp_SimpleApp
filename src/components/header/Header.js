import {StyleSheet, View} from 'react-native';
import React from 'react';
import Text from '../text/Text';
import {colors} from '../../theme';
import Icon from '../icon/Icon';

const Header = ({title, icon, onIconPress}) => {
  return (
    <View style={styles.container}>
      {/** To Mange title in middle */}
      <View style={icon && {width: 20}} />
      <View style={styles.titleContainer}>
        <Text style={styles.title} isBold={true}>
          {title}
        </Text>
      </View>
      {icon ? <Icon name={icon} size={20} onPress={onIconPress} /> : <View />}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    color: colors.white,
  },
  container: {
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
