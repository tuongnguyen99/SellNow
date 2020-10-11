import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const Card = ({ title = "", subtitle = "", image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  detailsContainer: {
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    color: colors.black,
    marginBottom: 10,
    fontSize: 16,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
