import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "./screens/Configuracoes/contexts";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View, Text, Alert } from "react-native";
import Login from "./screens/Login/Login";
import Categorias from "./screens/Categorias/Categorias";
import Produtos from "./screens/Produtos/Produtos";
import Carrinho from "./screens/Produtos/Carrinho/Carrinho";
import Checkout from "./screens/Produtos/Carrinho/Checkout";
import Perfil from "./screens/Perfil/Perfil";
import Configuracoes from "./screens/Configuracoes/Configuracoes";
import Mapas from "./screens/Mapas/Mapas";
import DetalhesRestaurantes from "./screens/Mapas/DetalhesRestaurantes";
import Header from "./navigation/Header"; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [cart, setCart] = useState([]); 

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const InicioStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Categorias">
        {({ navigation }) => (
          <Categorias
            goToProducts={(categoriaId, categoriaNome) =>
              navigation.navigate("Produtos", {
                categoriaNome,
                produtos: ProdutosPorCategoria[categoriaNome] || [],
              })
            }
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="Produtos"
        options={({ route }) => ({
          title: route.params?.categoriaNome || "Produtos",
        })}
      >
        {({ route }) => <Produtos addToCart={addToCart} route={route} />}
      </Stack.Screen>
    </Stack.Navigator>
  );

  const MapasStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Mapas">
        {({ navigation }) => (
          <Mapas
            navigation={navigation}
            onRestaurantePress={(restaurante) =>
              navigation.navigate("DetalhesRestaurantes", { restaurante })
            }
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="DetalhesRestaurantes"
        component={DetalhesRestaurantes}
        options={{ title: "Detalhes do Restaurante" }}
      />
    </Stack.Navigator>
  );

  const PerfilStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
      <Stack.Screen
        name="Configuracoes"
        component={Configuracoes}
        options={{ title: "Configurações" }}
      />
    </Stack.Navigator>
  );

  const CheckoutStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Carrinho" options={{ title: "Carrinho", headerShown: false }}>
        {({ navigation }) => (
          <Carrinho
  cart={cart}
  removeFromCart={(id) =>
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }
  goToCheckout={() => {
    
          const total = calculateTotal();
          navigation.navigate("Checkout", { cart, total });
        }}
      />

        )}
      </Stack.Screen>
      <Stack.Screen
  name="Checkout"
  options={{ title: "Checkout" }}
>
  {({ route, navigation }) => (
    <Checkout
      route={route}
      navigation={navigation}
      onFinalize={() => {
        Alert.alert("Pedido Realizado", "Seu pedido foi concluído com sucesso!");
        navigation.navigate("Carrinho");
        setCart([]); 
      }}
    />
  )}
</Stack.Screen>
    </Stack.Navigator>
  );

  const LogoutScreen = () => (
    <View style={styles.logoutContainer}>
      <MaterialIcons name="logout" size={64} color="red" />
      <Text onPress={() => setIsLoggedIn(false)} style={styles.logoutText}>
        Sair
      </Text>
    </View>
  );

  const MainTabs = () => (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#6200ee" },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#ccc",
      }}
    >
      <Tab.Screen
        name="Início"
        component={InicioStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Mapas"
        component={MapasStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="map" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={CheckoutStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="logout" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );

  return (
    <ThemeProvider>
      <NavigationContainer>
        {isLoggedIn ? (
          <>
            <Header /> 
            <MainTabs />
          </>
        ) : (
          <Login onLoginSuccess={() => setIsLoggedIn(true)} />
        )}
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  logoutContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutText: {
    color: "blue",
    marginTop: 10,
    fontSize: 18,
  },
});
