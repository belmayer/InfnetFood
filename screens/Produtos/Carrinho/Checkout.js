import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useTheme } from "../../Configuracoes/contexts";

export default function Checkout({ navigation, route }) {
  const { cart } = route.params;
  const { theme } = useTheme(); 

  
  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = calculateTotal(); 

  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleFinalizeOrder = () => {
    if (!address.trim() || !paymentMethod.trim()) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    
    Alert.alert(
      "Pedido Realizado",
      `Seu pedido foi concluído com sucesso! Total pago: R$ ${Number(total).toFixed(2).replace(".", ",")}`,
      [
        {
          text: "OK",
          onPress: () => {
            navigation.popToTop(); 
          },
        },
      ]
    );
  };

  return (
    <View
      style={[
        styles.container,
        theme === "dark" && styles.containerDark, 
      ]}
    >
      <Text style={[styles.title, theme === "dark" && styles.textDark]}>Revisar Pedido</Text>

      <Text style={[styles.sectionTitle, theme === "dark" && styles.textDark]}>Itens do Carrinho:</Text>
      {cart.map((item, index) => (
        <Text key={index} style={[styles.cartItem, theme === "dark" && styles.textDark]}>
          {item.name} - R$ {item.price.toFixed(2).replace(".", ",")} x {item.quantity}
        </Text>
      ))}

      <Text style={[styles.total, theme === "dark" && styles.textDark]}>
        Total de itens: {totalItems}{"\n"}
        Total: R$ {total.replace(".", ",")}
      </Text>

      <Text style={[styles.sectionTitle, theme === "dark" && styles.textDark]}>
        Endereço de Entrega:
      </Text>
      <TextInput
        style={[
          styles.input,
          theme === "dark" && styles.inputDark, 
        ]}
        placeholder="Digite o endereço"
        placeholderTextColor={theme === "dark" ? "#aaa" : "#666"} 
        value={address}
        onChangeText={setAddress}
      />

      <Text style={[styles.sectionTitle, theme === "dark" && styles.textDark]}>
        Método de Pagamento:
      </Text>
      <TextInput
        style={[
          styles.input,
          theme === "dark" && styles.inputDark,
        ]}
        placeholder="Ex.: Cartão de Crédito, PIX, etc."
        placeholderTextColor={theme === "dark" ? "#aaa" : "#666"}
        value={paymentMethod}
        onChangeText={setPaymentMethod}
      />

      <TouchableOpacity style={styles.finalizeButton} onPress={handleFinalizeOrder}>
        <Text style={styles.finalizeButtonText}>Finalizar Pedido</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff", 
  },
  containerDark: {
    backgroundColor: "#121212", 
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#000", 
  },
  textDark: {
    color: "#fff", 
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    color: "#000",
  },
  cartItem: {
    fontSize: 16,
    marginBottom: 4,
    color: "#000",
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    color: "#000",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    color: "#000",
    backgroundColor: "#fff",
  },
  inputDark: {
    borderColor: "#333",
    backgroundColor: "#1e1e1e", 
    color: "#fff", 
  },
  finalizeButton: {
    backgroundColor: "#0181F1",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  finalizeButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
