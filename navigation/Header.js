import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>InfnetFood</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6200ee",
    paddingTop: 50,
    padding: 20,
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 27,
    fontWeight: "bold",
  },
});
