import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import Login from "../screens/Login/Login";
import Categorias from "../screens/Categorias/Categorias";
import Produtos from "../screens/Produtos/Produtos";
import Carrinho from "../screens/Produtos/Carrinho/Carrinho";
import Checkout from "../screens/Produtos/Carrinho/Checkout";
import Perfil from "../screens/Perfil/Perfil";
import Configurations from "../screens/Configuracoes/Configuracoes";
import Mapas from "../screens/Mapas/Mapas";
import DetalhesRestaurantes from "../screens/Mapas/DetalhesRestaurantes";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const addToCart = (product) => {
  console.log("Produto adicionado ao carrinho:", product);
};

function LogoutScreen({ navigation }) {
  return (
    <View style={styles.logoutContainer}>
      <Text>Você saiu com sucesso!</Text>
      <Text
        onPress={() => navigation.replace("Login")}
        style={styles.logoutText}
      >
        Ir para Login
      </Text>
    </View>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Início"
        component={Categorias}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      // <Tab.Screen
      //   name="Carrinho"
      //   component={(props) => (
      //     <Carrinho
      //       {...props}
      //       cart={[]} // Substitua por um estado global ou props reais
      //       navigation={props.navigation}
      //     />
      //   )}
      //   options={{
      //     tabBarIcon: ({ color, size }) => (
      //       <MaterialIcons name="shopping-cart" size={size} color={color} />
      //     ),
      //   }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="logout" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />

        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }} 
        />

        <Stack.Screen
          name="Configuracoes"
          component={Configurations}
          options={{ title: "Configurações" }}
        />

        <Stack.Screen
          name="Produtos"
          options={({ route }) => ({
            title: route.params?.categoriaNome || "Produtos",
          })}
        >
          {({ route }) => <Produtos addToCart={addToCart} route={route} />}
        </Stack.Screen>

        <Stack.Screen
          name="Mapas"
          component={Mapas}
          options={{ title: "Mapas" }}
        />
        <Stack.Screen
          name="DetalhesRestaurantes"
          component={DetalhesRestaurantes}
          options={{ title: "Detalhes dos Restaurantes" }}
        />

        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{ title: "Checkout" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
  },
});
