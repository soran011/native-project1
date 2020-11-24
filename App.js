import React from "react";

import { View, Text } from "react-native";
import AppButton from "./app/components/AppButton";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from './app/components/Screen'
import Icon from './app/components/Icon'
import ListItem from "./app/components/ListItem";

export default function App() {
  return (
  <Screen>
    <ListItem title="my title"  ImageComponent={<Icon name="email"/>}/>
  </Screen>
  );
}
