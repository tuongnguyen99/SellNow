import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <Screen style={styles.container}>
      <TouchableWithoutFeedback>
        <MaterialCommunityIcons
          name='close'
          size={35}
          color='#fff'
          style={styles.closeIcon}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <MaterialCommunityIcons
          style={styles.deleteIcon}
          name='trash-can-outline'
          size={35}
          color='#fff'
        />
      </TouchableWithoutFeedback>
      <Image
        style={styles.image}
        source={require("../assets/phone.jpg")}
        resizeMode='contain'
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
    padding: 10,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
    padding: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
