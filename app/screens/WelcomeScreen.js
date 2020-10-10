import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import colors from "../config/colors";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/welcome_background.jpg")}
      resizeMode='cover'
      blurRadius={2}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.slogan}>This is the slogan</Text>
      </View>
      <CustomButton title='Login' />
      <CustomButton title='Register' color='secondary' />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    top: 80,
  },
  slogan: {
    color: colors.white,
    fontSize: 20,
    marginTop: 6,
  },
});

export default WelcomeScreen;
