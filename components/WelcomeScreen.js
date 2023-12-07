import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

const whiteColor = "#EDEFEE";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require("../img/logo.png")}
      />
      <ScrollView>
        <Text style={styles.titleText}>Welcome to Little Lemon</Text>

        <Text style={styles.descriptionText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
    flex: 0.8,
  },
  titleText: {
    color: whiteColor,
    fontSize: 30,
    marginBottom: 50,
  },
  descriptionText: {
    color: whiteColor,
    flexWrap: "wrap",
    fontSize: 50,
    textAlign: "center",
  },
  logo: {
    width: 500,
    height: 100,
  },
});

export default WelcomeScreen;
