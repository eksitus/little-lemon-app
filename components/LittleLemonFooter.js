import React from "react";
import { Text, View, StyleSheet } from "react-native";

const coralColor = "#EE9972";
const yellowColor = "#f4ce14";

const LittleLemonFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>All rights reserved by Little Lemon, 2023</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.03,
    backgroundColor: yellowColor,
    alignItems: "center",
  },
  text: {
    fontStyle: "italic",
  },
});
export default LittleLemonFooter;
