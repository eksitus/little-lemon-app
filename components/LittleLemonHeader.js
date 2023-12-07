import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const coralColor = "#EE9972";
const yellowColor = "#f4ce14";

const LittleLemonHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Little Lemon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.09,
    backgroundColor: yellowColor,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
    paddingBottom: 0,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
});
export default LittleLemonHeader;
