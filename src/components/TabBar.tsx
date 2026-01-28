import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Pressable } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';
import { View, useThemeColors } from '@/src/components/Themed';

type TabIcon =
  | {
      lib: 'MaterialIcons';
      name: React.ComponentProps<typeof MaterialIcons>['name'];
    }
  | {
      lib: 'Entypo';
      name: React.ComponentProps<typeof Entypo>['name'];
    };

type TabIconProps = {
  icon: TabIcon;
  color: string;
};

function TabIcon({ icon, color }: TabIconProps) {
  const size = 24;

  switch (icon.lib) {
    case 'MaterialIcons':
      return <MaterialIcons name={icon.name} size={size} color={color} />;

    case 'Entypo':
      return <Entypo name={icon.name} size={size} color={color} />;
  }
}

const tabIconsData: Record<number, TabIcon> = {
  0: { lib: 'MaterialIcons', name: 'home-filled' },
  1: { lib: 'Entypo', name: 'bar-graph' },
  3: { lib: 'MaterialIcons', name: 'category' },
  4: { lib: 'MaterialIcons', name: 'settings' },
};

export default function TabBar({ state, navigation }: BottomTabBarProps) {

  const colors = useThemeColors();

  return (
    <View style={
      {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: colors.border
      }}>
      {state.routes.map((route: any, index: number) => {

        const isFocused = state.index === index;

        const iconData = tabIconsData[index];

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
                    styles.addButton,
                    { backgroundColor: colors.tabIconSelected }
                  ]}>
                    <AntDesign
                      name="plus"
                      size={25}
                      color={colors.border}
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
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}
          >
            {iconData && (
              <TabIcon
                icon={iconData}
                color={isFocused ? colors.tabIconSelected : colors.tabIconDefault}
              />
            )}
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
  }
});
