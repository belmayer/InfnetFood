import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "./Configuracoes/contexts";

export default function Logout({ onLogout }) {
  useEffect(() => {
    onLogout(); 
  }, []);

  const { theme } = useTheme(); 

  return (
    <View
      style={[
        styles.container,
        theme === "dark" && styles.containerDark, 
      ]}
    >
      <Text
        style={[
          styles.message,
          theme === "dark" && styles.messageDark, 
        ]}
      >
        Você foi desconectado!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", 
  },
  containerDark: {
    backgroundColor: "#121212", 
  },
  message: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000", 
  },
  messageDark: {
    color: "#fff", 
  },
});
