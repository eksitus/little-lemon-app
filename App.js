import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader.js";
import LittleLemonFooter from "./components/LittleLemonFooter.js";
import WelcomeScreen from "./components/WelcomeScreen.js";
import MenuItems from "./components/MenuItems.js";
import FeedbackForm from "./components/FeedbackForm.js";
import LoginScreen from "./components/LoginScreen.js";
import { colors } from "./data.js";

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      <WelcomeScreen />
      <LittleLemonFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: colors.green,
  },
});
export default LotsOfStyles;
