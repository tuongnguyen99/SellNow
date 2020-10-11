import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Tuong Nguyen'
          subTitle='tuongnguyen99@gmail.com'
          image={require("../assets/tuong_nguyen.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={item => {
            return item.title;
          }}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => {
            return (
              <ListItem
                title={item.title}
                ImageComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
              />
            );
          }}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title='Log Out'
          ImageComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
        />
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    marginVertical: 20,
  },
  container: {
    marginVertical: 10,
  },
});
export default AccountScreen;
