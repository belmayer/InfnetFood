import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./Login.css";

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 

  const handleLogin = () => {
    setErrorMessage("");

    if (!email || !senha) {
      setErrorMessage("Por favor, preencha todos os campos.");
      Alert.alert("Erro", "Por favor, preencha todos os campos."); 
      return;
    }

    if (!email.includes("@")) {
      setErrorMessage("Por favor, insira um e-mail válido contendo '@'.");
      Alert.alert("Erro", "Por favor, insira um e-mail válido contendo '@'."); 
      return;
    }

    if (senha.length < 4) {
      setErrorMessage("A senha deve ter no mínimo 4 caracteres.");
      Alert.alert("Erro", "A senha deve ter no mínimo 4 caracteres."); 
      return;
    }

    Alert.alert("Sucesso", "Login realizado com sucesso!");
    onLoginSuccess();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null} 
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
