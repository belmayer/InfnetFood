import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { useTheme } from "../Configuracoes/contexts";

const DetalhesRestaurantes = ({ route }) => {
  const { restaurante } = route.params; 
  const { theme } = useTheme(); 

  return (
    <ScrollView
      style={[
        styles.container,
        theme === "dark" && styles.containerDark, 
      ]}
    >
      <Image
        source={{
          uri: restaurante.imagem || "https://via.placeholder.com/400x200.png?text=Imagem+do+Restaurante",
        }}
        style={styles.image}
        resizeMode="cover"
      />

      <View
        style={[
          styles.detailsContainer,
          theme === "dark" && styles.detailsContainerDark,
        ]}
      >
        <Text
          style={[
            styles.restaurantName,
            theme === "dark" && styles.restaurantNameDark,
          ]}
        >
          {restaurante.nome}
        </Text>
        <Text
          style={[
            styles.restaurantAddress,
            theme === "dark" && styles.restaurantAddressDark,
          ]}
        >
          {restaurante.endereco}
        </Text>

        {restaurante.detalhes && (
          <Text
            style={[
              styles.restaurantDetails,
              theme === "dark" && styles.restaurantDetailsDark,
            ]}
          >
            {restaurante.detalhes}
          </Text>
        )}

        {/* Cardápio */}
        {Array.isArray(restaurante.cardapio) && restaurante.cardapio.length > 0 ? (
          <View style={styles.menuItemContainer}>
            <Text
              style={[
                styles.menuItemTitle,
                theme === "dark" && styles.menuItemTitleDark, 
              ]}
            >
              Cardápio:
            </Text>
            {restaurante.cardapio.map((item, index) => (
              <View key={index} style={styles.menuItem}>
                <Text
                  style={[
                    styles.menuItemName,
                    theme === "dark" && styles.menuItemNameDark, 
                  ]}
                >
                  {item.nome}
                </Text>
                <Text
                  style={[
                    styles.menuItemPrice,
                    theme === "dark" && styles.menuItemPriceDark, 
                  ]}
                >
                  {`Preço: R$ ${item.preco.toFixed(2)}`}
                </Text>
              </View>
            ))}
          </View>
        ) : (
          <Text
            style={[
              styles.noMenuMessage,
              theme === "dark" && styles.noMenuMessageDark, 
            ]}
          >
            Nenhum item no cardápio disponível.
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerDark: {
    backgroundColor: "#121212",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  detailsContainerDark: {
    backgroundColor: "#1e1e1e",
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  restaurantNameDark: {
    color: "#fff",
  },
  restaurantAddress: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  restaurantAddressDark: {
    color: "#bbb",
  },
  restaurantDetails: {
    fontSize: 14,
    color: "#333",
    marginBottom: 20,
  },
  restaurantDetailsDark: {
    color: "#949596",
  },
  menuItemContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  menuItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  menuItemTitleDark: {
    color: "#000",
  },
  menuItem: {
    marginBottom: 10,
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  menuItemNameDark: {
    color: "#000",
  },
  menuItemPrice: {
    fontSize: 14,
    color: "#555",
  },
  menuItemPriceDark: {
    color: "#bbb",
  },
  noMenuMessage: {
    marginTop: 10,
    fontSize: 14,
    color: "#999",
    textAlign: "center",
  },
  noMenuMessageDark: {
    color: "#000",
  },
});

export default DetalhesRestaurantes;
