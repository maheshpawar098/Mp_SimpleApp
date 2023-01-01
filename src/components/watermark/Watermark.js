import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React from 'react';
import Image from 'react-native-scalable-image';
import {images} from '../../assets';

const Watermark = ({isMoreBottom}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.waterMarkContainer(isMoreBottom)}>
      <Image source={images.LoginWaterMark} width={width} />
    </View>
  );
};

export default Watermark;

const styles = StyleSheet.create({
  waterMarkContainer: (isMoreBottom) => ({
    position: 'absolute',
    bottom: isMoreBottom ? -60 : 0,
    alignSelf: 'center',
  }),
});
