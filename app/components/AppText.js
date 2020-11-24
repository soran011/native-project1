import React from "react";
import { Text } from "react-native";

import deafultStyles from "../config/styles";

function AppText({ children, style }) {
  return <Text style={[deafultStyles.text, style]}>{children}</Text>;
}

export default AppText;
