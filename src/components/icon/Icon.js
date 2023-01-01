import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {images} from '../../assets';
import Image from 'react-native-scalable-image';

const Icon = ({name, size, onPress, height, style}) => {
  
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {name ? <Image source={images[name]} width={size} height={height} />: null}
    </TouchableOpacity>
  );
};

export default Icon;

const styles = StyleSheet.create({});
