import React from "react";
import Card from "./app/components/Card";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen style={{ backgroundColor: "#f8f4f4", padding: 10 }}>
      <Card
        title='New phone for sale!'
        subtitle='$100'
        image={require("./app/assets/phone.jpg")}
      />
    </Screen>
  );
}
