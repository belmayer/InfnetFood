import React from "react";
import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import mapa from "../../assets/mapa.png";
import { useTheme } from "../Configuracoes/contexts";

const restaurantes = [
  {
    id: "1",
    nome: "Restaurante Mosteiro",
    endereco: "Rua São Bento, 13-15, Centro, Rio de Janeiro",
    detalhes: "Culinária portuguesa clássica desde 1964.",
    imagem: "https://media-cdn.tripadvisor.com/media/photo-s/0e/59/98/08/salao-classico.jpg",
    cardapio: [
    { nome: "Prato 1", preco: 25.5 },
    { nome: "Prato 2", preco: 30.0 },
  ],
  },
  {
    id: "2",
    nome: "Galitos Grill Ipanema",
    endereco: "Rua Teixeira de Melo, 53, Ipanema, Rio de Janeiro",
    detalhes: "Especializado em galetos e grelhados.",
    imagem: "https://photos.wikimapia.org/p/00/06/52/34/03_full.jpg",
    cardapio: [
    { nome: "Prato 1", preco: 25.5 },
    { nome: "Prato 2", preco: 30.0 },
  ],
  },
  {
    id: "3",
    nome: "Sobrado da Cidade",
    endereco: "Rua do Rosário, 34, Centro, Rio de Janeiro",
    detalhes: "Restaurante histórico com culinária contemporânea.",
    imagem: "https://diariodorio.com/wp-content/uploads/2021/08/sobrado.png",
    cardapio: [
    { nome: "Prato 1", preco: 25.5 },
    { nome: "Prato 2", preco: 30.0 },
  ],
  },
  {
    id: "4",
    nome: "Cachaçaria Mangue Seco",
    endereco: "Rua do Lavradio, 23, Centro, Rio de Janeiro",
    detalhes: "Especializada em cachaças e petiscos brasileiros.",
    imagem: "https://img.restaurantguru.com/cbbd-Restaurant-Cachacaria-Mangue-Seco-exterior.jpg",
    
  },
  {
    id: "5",
    nome: "Lilia Restaurante",
    endereco: "Rua Acre, 47, Centro, Rio de Janeiro",
    detalhes: "Culinária contemporânea com ingredientes locais.",
    imagem: "https://media-cdn.tripadvisor.com/media/photo-s/15/ec/60/81/screenshot-20190101-130602.jpg",
    cardapio: [
    { nome: "Prato 1", preco: 25.5 },
    { nome: "Prato 2", preco: 30.0 },
  ],
  },
  {
    id: "6",
    nome: "Restaurante Japonês Mestre Kami",
    endereco: "Rua do Ouvidor, 77, Centro, Rio de Janeiro",
    detalhes: "Sushis e temakis em um ambiente casual.",
    imagem: "https://static.wixstatic.com/media/1208e6_963aebe035ab49eb88e77e8d739d5805~mv2.jpg/v1/fit/w_2500%2Ch_1330%2Cal_c/1208e6_963aebe035ab49eb88e77e8d739d5805~mv2.jpg",
    cardapio: [
    { nome: "Prato 1", preco: 25.5 },
    { nome: "Prato 2", preco: 30.0 },
  ],
  },
  {
    id: "7",
    nome: "Amarelinho da Cinelândia",
    endereco: "Praça Floriano, 55, Centro, Rio de Janeiro",
    detalhes: "Bar tradicional conhecido pela feijoada e chopp.",
    imagem: "https://guiaculturalcentrodorio.com.br/wp-content/uploads/2015/12/4-115.jpg",
    cardapio: [
    { nome: "Prato 1", preco: 25.5 },
    { nome: "Prato 2", preco: 30.0 },
  ],
  },
  {
    id: "8",
    nome: "Restaurante Bar Brasil",
    endereco: "Avenida Mem de Sá, 90, Lapa, Rio de Janeiro",
    detalhes: "Culinária alemã tradicional desde 1907.",
    imagem: "https://media-cdn.tripadvisor.com/media/photo-s/15/34/3e/25/primeiro-prato-depois.jpg",
    cardapio: [
    { nome: "Prato 1", preco: 25.5 },
    { nome: "Prato 2", preco: 30.0 },
  ],
  },
  {
    id: "9",
    nome: "Restaurante Ópera",
    endereco: "Rua Senador Dantas, 75, Centro, Rio de Janeiro",
    detalhes: "Alta gastronomia internacional.",
    imagem: "https://img.restaurantguru.com/w550/h367/rd65-food-Opera-Cafes-Especiais-e-Confeitaria.jpg",
    cardapio: [
    { nome: "Prato 1", preco: 25.5 },
    { nome: "Prato 2", preco: 30.0 },
  ],
  },
  {
    id: "10",
    nome: "Cortiço Carioca",
    endereco: "Rua do Lavradio, 170, Centro, Rio de Janeiro",
    detalhes: "Gastrobar com comida brasileira e música ao vivo.",
    imagem: "https://img.restaurantguru.com/c6f2-Restaurant-Cortico-Carioca-exterior.jpg?%40m%40t%40s%40d=",
    cardapio: [
    { nome: "Prato 1", preco: 25.5 },
    { nome: "Prato 2", preco: 30.0 },
  ],
  },
];


export default function Mapas({ navigation }) {
  const { theme } = useTheme(); // Obtém o tema atual (light ou dark)

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.restaurantItem,
        theme === "dark" && styles.restaurantItemDark, // Estilo condicional para dark mode
      ]}
      onPress={() => navigation.navigate("DetalhesRestaurantes", { restaurante: item })}
    >
      <Image source={{ uri: item.imagem }} style={styles.restaurantImage} />
      <Text style={[styles.restaurantName, theme === "dark" && styles.textDark]}>
        {item.nome}
      </Text>
      <Text style={[styles.restaurantAddress, theme === "dark" && styles.textDark]}>
        {item.endereco}
      </Text>
      <Text style={[styles.restaurantDetails, theme === "dark" && styles.textDark]}>
        {item.detalhes}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={[
        styles.container,
        theme === "dark" && styles.containerDark, 
      ]}
    >
      <Image source={mapa} style={styles.mapImage} />
      <FlatList
        data={restaurantes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.restaurantsList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", 
  },
  containerDark: {
    backgroundColor: "#121212", 
  },
  mapImage: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  restaurantsList: {
    padding: 20,
    flexGrow: 1,
  },
  restaurantItem: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  restaurantItemDark: {
    backgroundColor: "#1e1e1e", 
    borderColor: "#333", 
    shadowColor: "#000",
  },
  restaurantImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#000",
  },
  restaurantAddress: {
    fontSize: 14,
    color: "#555", 
  },
  restaurantDetails: {
    fontSize: 12,
    color: "#777", 
  },
  textDark: {
    color: "#fff", 
  },
});