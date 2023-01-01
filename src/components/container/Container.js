import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../theme';
import Header from '../header/Header';
import Content from '../content/Content';

const Container = ({
  icon,
  onIconPress,
  children,
  isLoading,
  title,
  isFailed,
}) => {
  return (
    <View style={[styles.container, styles.iosStatusBar]}>
      <View style={styles.iosStatusBar} />
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={colors.primary}
        />
        <Header title={title} onIconPress={onIconPress} icon={icon} />
        <Content isFailed={isFailed} isLoading={isLoading}>
          {children}
        </Content>
      </SafeAreaView>
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iosStatusBar: {
    backgroundColor: colors.primary,
  },
});
