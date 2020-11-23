import React from "react";
import { View, StyleSheet, Image } from "react-native";

import color from "../config/colors";
import AppText from "./AppText";

function Card({title, subTitle, image}) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailesContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: color.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },

  detailesContainer: {
      padding: 20,
  },

  title: {
      marginBottom: 7,  
  },

  subTitle: {
      color: color.secondary,
      fontWeight: "bold",
  }
});
