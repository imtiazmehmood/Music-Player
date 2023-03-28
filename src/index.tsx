import React from "react";
import { StatusBar } from "react-native";

import { Provider } from "./provider";
import RootNavigationStack from "navigator";

interface Props {}

export const App: React.FC<Props> = () => {
  return (
    <Provider>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <RootNavigationStack />
    </Provider>
  );
};
