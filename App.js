import React, {useState} from "react";


import { View, Text, TextInput, Switch } from "react-native";
import AppButton from "./app/components/AppButton";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from './app/components/Screen'
import Icon from './app/components/Icon'
import ListItem from "./app/components/ListItem";
import AcountScreen from "./app/screens/AcountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {

  const [isNew, setIsNew] = useState(false)


  return (
  <Screen>
    <AppPicker placeholder="Category" icon="apps"/>
    <AppTextInput placeholder="Email" icon="email"/>
  </Screen>
  );
}
