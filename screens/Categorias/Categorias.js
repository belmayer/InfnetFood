import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../Configuracoes/contexts";
import { ProdutosPorCategoria } from "../Produtos/Produtos";

const categorias = [
  { id: "1", nome: "Lanches", imagem: "https://i.pinimg.com/736x/5f/f8/ea/5ff8ea62484423881bd3ed421fbb9a73.jpg" },
  { id: "2", nome: "Bebidas", imagem: "https://i.pinimg.com/736x/2d/c4/9a/2dc49ac11a82e71eb2fda5a20ae12164.jpg" },
  { id: "3", nome: "Sobremesas", imagem: "https://i.pinimg.com/736x/ec/d2/c0/ecd2c045ec867c2e298e67b17ed7dad1.jpg" },
  { id: "4", nome: "Refeições", imagem: "https://i.pinimg.com/736x/8f/b7/79/8fb779329826a60da4df1e15299300bf.jpg" },
  { id: "5", nome: "Aperitivos", imagem: "https://i.pinimg.com/736x/c0/ee/80/c0ee804a007a7fe0c9014a044f0b8a11.jpg" },
];

export default function Categorias() {
  const navigation = useNavigation();
  const { theme } = useTheme(); 

  const navigateToProdutos = (categoriaNome) => {
    const produtosFiltrados = ProdutosPorCategoria[categoriaNome] || [];
    navigation.navigate("Produtos", { produtos: produtosFiltrados, categoriaNome });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, theme === "dark" && styles.cardDark]}
      onPress={() => navigateToProdutos(item.nome)}
      testID="categoria-card"
    >
      <Image source={{ uri: item.imagem }} style={styles.cardImage} />
      <Text style={[styles.cardText, theme === "dark" && styles.cardTextDark]}>{item.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, theme === "dark" && styles.containerDark]}>
      <Text style={[styles.title, theme === "dark" && styles.titleDark]}>Categorias</Text>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", 
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fff", 
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cardImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  cardText: {
    padding: 15,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#6200ee", 
  },

  containerDark: {
    flex: 1,
    backgroundColor: "#121212", 
    padding: 20,
  },
  titleDark: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff", 
  },
  cardDark: {
    backgroundColor: "#333", 
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cardTextDark: {
    padding: 15,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#bb86fc", 
  },
});
