import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../Configuracoes/contexts";

export default function Itens({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1); 
  const { theme } = useTheme(); 

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <View
      style={[
        styles.itemContainer,
        theme === "dark" && styles.itemContainerDark, 
      ]}
    >
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.info}>
        <Text
          style={[
            styles.name,
            theme === "dark" && styles.nameDark, 
          ]}
        >
          {product.name}
        </Text>
        <Text
          style={[
            styles.description,
            theme === "dark" && styles.descriptionDark, 
          ]}
        >
          {product.description}
        </Text>
        <Text
          style={[
            styles.price,
            theme === "dark" && styles.priceDark, 
          ]}
        >
          R$ {product.price.toFixed(2)}
        </Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={[
              styles.quantityButton,
              theme === "dark" && styles.quantityButtonDark, 
            ]}
            onPress={decrementQuantity}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text
            style={[
              styles.quantity,
              theme === "dark" && styles.quantityDark, 
            ]}
          >
            {quantity}
          </Text>
          <TouchableOpacity
            style={[
              styles.quantityButton,
              theme === "dark" && styles.quantityButtonDark,
            ]}
            onPress={incrementQuantity}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[
            styles.button,
            theme === "dark" && styles.buttonDark, 
          ]}
          onPress={() => addToCart({ ...product, quantity })}
        >
          <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  itemContainerDark: {
    backgroundColor: "#1e1e1e",
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },

  info: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  nameDark: {
    color: "#ffffff", 
  },
  description: {
    fontSize: 14,
    color: "#777",
    marginVertical: 4,
  },
  descriptionDark: {
    color: "#cccccc", 
  },
  price: {
    fontSize: 16,
    color: "#646466",
    fontWeight: "bold",
  },
  priceDark: {
    color: "#bb86fc", 
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  quantityButton: {
    width: 20,
    height: 20,
    backgroundColor: "#c3c4c2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginHorizontal: 4,
  },
  quantityButtonDark: {
    backgroundColor: "#444444", 
  },
  quantityButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  quantityDark: {
    color: "#ffffff", 
  },

  button: {
    marginTop: 8,
    padding: 8,
    backgroundColor: "#979799",
    borderRadius: 8,
  },
  buttonDark: {
    backgroundColor: "#bb86fc", 
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});