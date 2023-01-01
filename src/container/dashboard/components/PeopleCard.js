import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Icon, IconInfo, Text} from '../../../components';
import {colors} from '../../../theme';

const PeopleCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileImgContainer}>
        <Image source={{uri: item.profile_photo}} style={styles.profileImg} />
      </View>
      <View>
        <Text isBold={true} style={styles.name}>
          {item.name}
        </Text>
        <IconInfo icon="Location" label={item.address} />
        <View style={styles.buttonContainer}>
          <Icon name={'Chat'} style={styles.chatIcon} height={20} size={20} />
          <Icon
            name={'ProfileWhite'}
            style={styles.profileIcon}
            height={20}
            size={20}
          />
        </View>
      </View>
    </View>
  );
};

export default PeopleCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 7,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    borderWidth: 1,
    borderColor: colors.grayLight,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 15
  },
  profileImgContainer: {
    paddingEnd: 20,
    paddingTop: 5,
  },
  profileImg: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  name: {
    fontSize: 18,
    color: colors.secoundry,
    paddingBottom: 5,
  },
  buttonContainer: {
    paddingVertical: 5,
    flexDirection: 'row',
  },
  chatIcon: {
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileIcon: {
    backgroundColor: colors.secoundry,
    padding: 10,
    borderRadius: 8,
    marginStart: 15,
  },
});
