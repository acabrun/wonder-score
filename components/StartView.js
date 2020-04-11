import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

export default function StartView({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "yellow" }}>
      <View
        style={{
          flex: 7,
          justifyContent: "center",
          backgroundColor: "white"
        }}
      >
        <TouchableOpacity
          style={styles.button}
          backgroundColor="green"
          onPress={() => navigation.navigate("Continue")}
        >
          <Text style={styles.textButton}> Continue </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          backgroundColor="blue"
          onPress={() => navigation.navigate("New")}
        >
          <Text style={styles.textButton}> New game </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textButton: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold"
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#e3cfad",
    padding: 10,
    margin: 10,
    borderRadius: 10
  }
});
