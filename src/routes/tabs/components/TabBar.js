import {View, TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';
import {Text, Icon} from '../../../components';
import {colors} from '../../../theme';

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <View key={label} style={styles.tabContainer}>
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.tab(isFocused)}>
                <Icon
                  name={isFocused ? label : `${label}Gray`}
                  onPress={onPress}
                  height={isFocused ? 28.1 : 28}
                />
                <Text isBold={true} style={styles.label(isFocused)}>
                  {label}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white
  },
  tab: isFocused => ({
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    borderTopWidth: isFocused ? 3 : 0,
    borderTopColor: colors.secoundry,
    backgroundColor: colors.white,
    flexGrow: 1,
  }),
  tabContainer: {
    flex: 1,
  },
  label: isFocused => ({
    color: isFocused ? colors.secoundry : colors.charcoal,
  }),
});

export default TabBar;
