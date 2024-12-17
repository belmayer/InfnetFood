import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useTheme } from "../../Configuracoes/contexts";

export default function Carrinho({ cart = [], updateCartItem, removeFromCart, goToCheckout }) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        theme === "dark" && styles.containerDark, 
      ]}
    >
      <View style={styles.header}>
        <Text style={[styles.title, theme === "dark" && styles.titleDark]}>Carrinho</Text>
      </View>

      {cart.length === 0 ? (
        <Text style={[styles.emptyMessage, theme === "dark" && styles.emptyMessageDark]}>
          Seu carrinho está vazio.
        </Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.itemContainer,
                  theme === "dark" && styles.itemContainerDark,
                ]}
              >
                <View>
                  <Text
                    style={[
                      styles.itemName,
                      theme === "dark" && styles.itemNameDark,
                    ]}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={[
                      styles.itemPrice,
                      theme === "dark" && styles.itemPriceDark,
                    ]}
                  >
                    R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}{" "}
                    <Text style={[styles.quantity, theme === "dark" && styles.quantityDark]}>
                      ({item.quantity}x)
                    </Text>
                  </Text>
                </View>
                <View style={styles.actionButtons}>
                  <TouchableOpacity
                    onPress={() => removeFromCart(item.id)}
                    style={[
                      styles.removeButton,
                      theme === "dark" && styles.removeButtonDark,
                    ]}
                  >
                    <Text style={styles.removeButtonText}>Remover</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />

          <View style={[styles.divider, theme === "dark" && styles.dividerDark]} />

          <View style={styles.totalContainer}>
            <Text style={[styles.totalText, theme === "dark" && styles.totalTextDark]}>
              Total: R$ {calculateTotal().replace(".", ",")}
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.checkoutButton,
              theme === "dark" && styles.checkoutButtonDark,
            ]}
            onPress={() => {
              if (cart.length === 0) {
                Alert.alert("Carrinho vazio", "Adicione itens ao carrinho antes de prosseguir.");
              } else {
                goToCheckout({
                  cart,
                  total: calculateTotal(),
                });
              }
            }}
          >
            <Text style={styles.checkoutButtonText}>Finalizar Pedido</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  containerDark: {
    backgroundColor: "#121212",
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  titleDark: {
    color: "#fff",
  },
  emptyMessage: {
    fontSize: 18,
    color: "#aaa",
    textAlign: "center",
  },
  emptyMessageDark: {
    color: "#777",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 8,
  },
  itemContainerDark: {
    backgroundColor: "#1e1e1e",
  },
  itemName: {
    fontSize: 18,
    color: "#000",
  },
  itemNameDark: {
    color: "#fff",
  },
  itemPrice: {
    fontSize: 16,
    color: "#333",
  },
  itemPriceDark: {
    color: "#ccc",
  },
  quantity: {
    color: "#666",
  },
  quantityDark: {
    color: "#888",
  },
  actionButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  removeButton: {
    backgroundColor: "#ff4d4d",
    padding: 5,
    borderRadius: 5,
  },
  removeButtonDark: {
    backgroundColor: "#e53935",
  },
  removeButtonText: {
    color: "#fff",
    fontSize: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  dividerDark: {
    backgroundColor: "#444",
  },
  totalContainer: {
    alignItems: "flex-end",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  totalTextDark: {
    color: "#fff",
  },
  checkoutButton: {
    backgroundColor: "#6200ee",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  checkoutButtonDark: {
    backgroundColor: "#3700b3",
  },
  checkoutButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
