import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Pressable } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';



import Colors from '@/src/constants/Colors';

const tabIcons: Record<number, {
  icon: JSX.Element; 
  iconFocused: JSX.Element
}> = {
  0: {
    icon: <MaterialIcons name="home-filled" size={24} color="black" />,
    iconFocused: <MaterialIcons name="home-filled" size={24} color="rgb(150 150 150)" />
  },
  1: {
    icon: <Entypo name="bar-graph" size={24} color="rgb(40 40 40)" />,
    iconFocused: <Entypo name="bar-graph" size={24} color="rgb(150 150 150)" />
  },
  3: {
    icon: <MaterialIcons name="category" size={24} color="rgb(40 40 40)" />,
    iconFocused: <MaterialIcons name="category" size={24} color="rgb(150 150 150)" />
  },
  4: {
    icon: <MaterialIcons name="settings" size={24} color="rgb(40 40 40)" />,
    iconFocused: <MaterialIcons name="settings" size={24} color="rgb(150 150 150)" />
  }
}

export default function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    // const { buildHref } = useLinkBuilder();

  return (
    <View style={
      {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: 'rgb(40 40 40)'
      }}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
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
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        if (route.name === "addExpense") {
            return (
              <Link href="/modal" asChild key={route.key}>
                <Pressable>
                  {({ pressed }) => (
                    <View style={[
                      // { borderColor: pressed ? 'rgba(0,0,0,.5)' : 'black' },
                      styles.addButton
                    ]}>
                      <AntDesign
                        name="plus"
                        size={25}
                        color='#fff'
                        // color={Colors[colorScheme ?? 'light'].text}
                        style={{ opacity: pressed ? 0.5 : 1 }}
                      />
                    </View>
                  )}
                </Pressable>
              </Link>
            )
        }

        return (
          <TouchableOpacity
            key={route.key}
            // href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}
          >
            {isFocused ? tabIcons[index]?.iconFocused : tabIcons[index]?.icon}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 70,
    height: 70,
    marginTop: -20,
    backgroundColor: 'rgb(40 40 40)'
  }
});
