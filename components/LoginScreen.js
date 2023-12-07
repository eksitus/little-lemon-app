import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Pressable,
} from "react-native";
import { colors } from "../data";

const green = "#495e57";

const LoginScreen = () => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <View style={styles.container}>
      {!loggedIn && (
        <>
          <Text style={styles.header}>Login to continue</Text>
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={"Email"}
            keyboardType={"email-address"}
            onFocus={() => {
              Alert.alert("something");
            }}
            clearButtonMode="always" //only ios
          />
          <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={onChangePassword}
            placeholder={"Password"}
            keyboardType={"default"}
            secureTextEntry={true}
          />
        </>
      )}
      {loggedIn && <Text style={styles.buttonText}>You logged in!</Text>}
      <Pressable
        style={styles.button}
        onPressIn={() => {
          setLoggedIn(!loggedIn);
        }}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.88,
    backgroundColor: colors.green,
    padding: 20,
    flexDirection: "column",
    justifyContent: "center",
  },
  inputBox: {
    flex: 0.08,
    backgroundColor: colors.yellow,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    marginTop: -100,
    marginBottom: 50,
  },
  button: {
    backgroundColor: "green",
    width: "100%",
    alignSelf: "center",
    borderRadius: 10,
    height: "6%",
    marginVertical: 20,
    flexDirection: "column",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 15,
    height: "100%",
    color: "white",
  },
});

export default LoginScreen;
