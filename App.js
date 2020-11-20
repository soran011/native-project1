import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Button,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "50%",
          height: 70,
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
