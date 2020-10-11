import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/phone.jpg")} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>New phone for sale</Text>
        <Text style={styles.price}>$900</Text>
        <View style={styles.userContainer}>
          <ListItem
            title='Tuong Nguyen'
            subTitle='9 Listings'
            image={require("../assets/tuong_nguyen.jpg")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginTop: 30,
  },
});

export default ListingDetailsScreen;
