import React, { useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

const yellow = "#f4ce14";

const FeedbackForm = () => {
  const [name, onChangeName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [message, onChangeMessage] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView keyboardDismissMode="on-drag" style={styles.container}>
        <Text style={styles.informHeader}>Welcome to Little Lemon</Text>
        <Text style={styles.informText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear your experience with us!
        </Text>
        <TextInput
          keyboardType="default"
          onChangeText={onChangeName}
          placeholder="Name"
          style={styles.textInput}
          value={name}
        />
        <TextInput
          keyboardType="default"
          onChangeText={onChangeEmail}
          placeholder="Email"
          style={styles.textInput}
          value={email}
        />
        <TextInput
          keyboardType="default"
          onChangeText={onChangeMessage}
          placeholder="Message"
          style={styles.messageInput}
          value={message}
          multiline={true}
        />
        {/* <Button title='send feedback' onPress={()=>{logValues(name,email,message)}}/> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const logValues = (name, email, message) => {
  console.log(name, email, message);
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 0.88,
    padding: 20,
  },
  informHeader: {
    color: "white",
    flexWrap: "wrap",
    fontSize: 32,
    marginBottom: 40,
    textAlign: "center",
  },
  informText: {
    color: "white",
    flexWrap: "wrap",
    fontSize: 22,
    marginBottom: 30,
    textAlign: "center",
  },
  messageInput: {
    backgroundColor: yellow,
    borderColor: "#edefee",
    borderWidth: 2,
    height: 90,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  textInput: {
    backgroundColor: yellow,
    borderColor: "#edefee",
    borderWidth: 2,
    height: 40,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
});

export default FeedbackForm;
