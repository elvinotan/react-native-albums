// Import a Libraray to help create component
import React from "react";
import { Text, View, AppRegistry } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

// Create Component
const App = () => {
  return (
    <View>
      <Header headerText={"Albums"} />
      <AlbumList />
    </View>
  );
};

// Render it to the device
AppRegistry.registerComponent("albums", () => App);
