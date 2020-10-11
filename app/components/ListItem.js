import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const ListItem = ({ title, subTitle, image, ImageComponent }) => {
  return (
    <View style={styles.container}>
      {ImageComponent}
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 2,
    fontSize: 16,
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
