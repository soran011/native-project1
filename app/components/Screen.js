import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.sreen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sreen: {
    paddingTop: Constants.StatusBarHeight,
    flex: 1,
  },
});
export default Screen;
