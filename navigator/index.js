import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationRef } from "./NavigationService";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Screens } from "src/screens";
import RadioScreen from "src/screens/Radio";
const Tab = createBottomTabNavigator();

const RootNavigationStack = (props) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
        initialRouteName="Player"
        screenOptions={{
          header: () => null,
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIndicatorStyle: {
            height: 4,
            borderRadius: 2,
            backgroundColor: "#212020",
          },
          tabBarActiveTintColor: "#176EF1",
          tabBarInactiveTintColor: "#000000",
          tabBarGap: 10,
        }}
      >
        <Tab.Screen
          name="Player"
          component={Screens}
          options={{
            tabBarLabel: "Player",
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <Image
                  source={require("assets/icons/musicdark.png")}
                  style={{ width: 28, height: 28, resizeMode: "contain" }}
                />
              ) : (
                <Image
                  source={require("assets/icons/musiclite.png")}
                  style={{ width: 28, height: 28, resizeMode: "contain" }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Radio"
          component={RadioScreen}
          options={{
            tabBarLabel: "Radio",
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <Image
                  source={require("assets/icons/radiodark.png")}
                  style={{ width: 28, height: 28, resizeMode: "contain" }}
                />
              ) : (
                <Image
                  source={require("assets/icons/radiolite.png")}
                  style={{ width: 28, height: 28, resizeMode: "contain" }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigationStack;
