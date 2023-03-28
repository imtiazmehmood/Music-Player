import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationRef } from "./NavigationService";
import { createDrawerNavigator } from "@react-navigation/drawer";
// const authStack = createStackNavigator()
const RootNavigationStack = (props) => {
  const { isAuth, isEnrolled, isOnboard, user, isKeepMeLoggedIn } = props;
  // const isEnrolled = false
  // const isOnboard = true
  // const isAuth = true
  // const user = { user_type: "business_admin" }
  // const user = { user_type: "employee" }
  // const user = { user_type: "company" }

  return (
    <NavigationContainer ref={navigationRef}>
      {/* <authStack.Navigator screenOptions={{ headerShown: false }}>
          <authStack.Screen name="AuthStack" component={AuthStackScreen} />
        </authStack.Navigator>
      */}
    </NavigationContainer>
  );
};

// const mapStateToProps = (state) => ({
//   user: state.login?.user?.users,
//   isOnboard: state.app.isOnboard,
//   isAuth: state.login?.isAuth,
//   isEnrolled: state.app.isEnrolled,
//   isKeepMeLoggedIn: state.app.isKeepMeLoggedIn,
// });

export default RootNavigationStack; //connect(mapStateToProps, null)(RootNavigationStack)
