import { View, FlatList, Text, StyleSheet } from "react-native";
import Itens from "./Itens";
// import styles from "./Produtos.css";
import { useTheme } from "../Configuracoes/contexts";

export const products = [
  {
    id: "1",
    name: "Coxinha",
    description: "Mattinata",
    price: 9.0,
    image: "https://i.pinimg.com/736x/de/7a/06/de7a0689a873e6228bc8304ad670e584.jpg",
    categoria: "Lanches",
  },
  {
    id: "2",
    name: "Milkshake",
    description: "Mooh",
    price: 25.0,
    image: "https://i.pinimg.com/736x/d3/99/3c/d3993c3594dcad3c8cb2b1486939a4da.jpg",
    categoria: "Bebidas",
  },
  {
    id: "3",
    name: "Cheesecake",
    description: "Vó Alzira",
    price: 20.0,
    image: "https://i.pinimg.com/736x/89/06/ca/8906caa38f0f6f830ac99ca554d0cbc4.jpg",
    categoria: "Sobremesas",
  },
  {
    id: "4",
    name: "Macarrão com Camarão",
    description: "Abraccio",
    price: 82.0,
    image: "https://i.pinimg.com/736x/29/8c/45/298c450071fc847e89e2285464afb8a3.jpg",
    categoria: "Refeições",
  },
  {
    id: "5", name: "Queijos e Frios", description: "HomeMade", price: 6.0, image: "https://i.pinimg.com/736x/2b/39/c1/2b39c15586c726438a5c9c6c72652c33.jpg", categoria: "Aperitivos"
  },
  { id: "6", name: "Pastel", description: "Feira", price: 7.0, image: "https://i.pinimg.com/736x/bb/0b/a3/bb0ba3478db0d7f80ab88272ee3cbe1d.jpg", categoria: "Aperitivos" },
  { id: "7", name: "Creme Cracker", description: "Piraquê", price: 7.0, image: "https://i.pinimg.com/736x/92/23/65/922365c9c59b2461a281382f86528922.jpg", categoria: "Aperitivos" },
  { id: "8", name: "Cachorro Quente", description: "Lanches", price: 10.0, image: "https://i.pinimg.com/736x/31/fb/b4/31fbb44ee4b2775e999e48331e84ffe4.jpg", categoria: "Lanches" },
  { id: "9", name: "Refrigerante", description: "Distribuidora", price: 5.0, image: "https://i.pinimg.com/736x/47/c2/b7/47c2b7eff2874e5353dd3a0637a921f7.jpg", categoria: "Bebida" },
  { id: "10", name: "Bolo", description: "Sobremesa", price: 12.0, image: "https://i.pinimg.com/736x/44/36/88/44368844c1361c08fa85ebc7e762b559.jpg", categoria: "Sobremesas" },
  { id: "11", name: "Salada", description: "Delírio Tropical", price: 15.0, image: "https://i.pinimg.com/736x/72/14/d1/7214d152bf9eb5561fec0ca4afc23955.jpg", categoria: "Refeições" },
  { id: "12", name: "Churros", description: "Doceria", price: 8.0, image: "https://i.pinimg.com/736x/9b/5f/8a/9b5f8af1840a4c942862f9a8414cda95.jpg", categoria: "Sobremesa" },
  { id: "13",name: "Uvas",
    description: "Hortifruit",
    price: 7.0,
    image: "https://i.pinimg.com/736x/18/24/55/1824552700dc0e5c5ef2742eab586f71.jpg",
    categoria: "Aperitivos"},
  { id: "14", name: "Pizza", description: "PizzaHut", price: 20.0, image: "https://i.pinimg.com/736x/56/fe/9e/56fe9eceba4278d7e0af04d4c9fa7c3c.jpg", categoria: "Lanches" },
  { id: "15", name: "Suco de Laranja", description: "Mercado", price: 5.5, image: "https://i.pinimg.com/736x/9b/13/c5/9b13c540fb5fbba2be4efc7c0db35d8c.jpg", categoria: "Bebidas" },
  { id: "16", name: "Mousse de Maracujá", description: "Sobremesa", price: 15.0, image: "https://i.pinimg.com/736x/16/04/9a/16049a334164ec14e30f716af3e0ab17.jpg", categoria: "Sobremesas" },
  { id: "17", name: "Arroz com Feijão", description: "PratoFeito", price: 18.0, image: "https://i.pinimg.com/736x/5f/cb/c5/5fcbc59f44e4f02d08d89b5e1e7277c7.jpg", categoria: "Refeições" },
  { id: "18", name: "Pipoca", description: "Cinema", price: 5.0, image: "https://i.pinimg.com/736x/a5/cb/33/a5cb33cfce011f2f3a0e033c2edc7422.jpg", categoria: "Aperitivos" },
  { id: "19", name: "Hambúrguer", description: "Madero", price: 15.0, image: "https://i.pinimg.com/736x/2f/ab/98/2fab982c004431fc98ab4a18e5db70b5.jpg", categoria: "Lanches" },
  { id: "20", name: "Água Mineral", description: "Fonte", price: 3.0, image: "https://i.pinimg.com/736x/4e/ce/72/4ece725a1ba158599b591ba074400be8.jpg", categoria: "Bebidas" },
];

export const ProdutosPorCategoria = {
  Lanches: products.filter((produto) => produto.categoria === "Lanches"),
  Bebidas: products.filter((produto) => produto.categoria === "Bebidas"),
  Sobremesas: products.filter((produto) => produto.categoria === "Sobremesas"),
  Refeições: products.filter((produto) => produto.categoria === "Refeições"),
  Aperitivos: products.filter((produto) => produto.categoria === "Aperitivos"),
};

export default function Produtos({ addToCart, goToCart, route }) {
  const { produtos, categoriaNome } = route.params;
  const { theme } = useTheme(); 

  return (
    <View
      style={[
        styles.container,
        theme === "dark" && styles.containerDark, 
      ]}
    >
      <View
        style={[
          styles.header,
          theme === "dark" && styles.headerDark, 
        ]}
      >
        <Text
          style={[
            styles.title,
            theme === "dark" && styles.titleDark, 
          ]}
        >
          Produtos de {categoriaNome}
        </Text>
      </View>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.productItem,
              theme === "dark" && styles.productItemDark, 
            ]}
          >
            <Itens product={item} addToCart={addToCart} theme={theme} />
          </View>
        )}
      />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  containerDark: {
    backgroundColor: "#121212", 
  },

  header: {
    marginBottom: 10,
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#f4f4f4",
  },
  headerDark: {
    backgroundColor: "#333333",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#000000",
  },
  titleDark: {
    color: "#ffffff", 
  },

  productItem: {
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  productItemDark: {
    backgroundColor: "#1e1e1e", 
    borderBottomColor: "#444444",
  },

});