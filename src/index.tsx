import React from "react";
import { StatusBar } from "react-native";

import { Provider } from "./provider";
import { Screens } from "./screens";

interface Props {}

export const App: React.FC<Props> = () => {
  return (
    <Provider>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Screens />
    </Provider>
  );
};
