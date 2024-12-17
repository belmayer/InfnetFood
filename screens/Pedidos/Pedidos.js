// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Button } from "react-native";
// import * as Notifications from "expo-notifications";
// import * as Device from "expo-device";
// import { Feather } from "@expo/vector-icons";
// import { useTheme } from "../Configuracoes/contexts";

// export default function Perfil({ navigation }) {
//   const [expoPushToken, setExpoPushToken] = useState("");
//   const [pedidos] = useState([
//     {
//       id: "1",
//       loja: "Mattinata Icaraí",
//       numero: "3487",
//       itens: "Italiano sem cebola",
//       maisItens: "mais 5 itens",
//     },
//     {
//       id: "2",
//       loja: "Novo Steak House Niterói",
//       numero: "6634",
//       itens: "Especial Filé Mignon",
//       maisItens: "",
//     },
//     {
//       id: "3",
//       loja: "Mamma Jamma Plaza Niterói",
//       numero: "5140",
//       itens: "Pizza Margherita Gourmet | Grande",
//       maisItens: "mais 2 itens",
//     },
//     {
//       id: "4",
//       loja: "Tutto Art",
//       numero: "3002",
//       itens: "Pizza Margherita",
//       maisItens: "mais 2 itens",
//     },
//   ]);

//   const mockUser = {
//     nome: "Isabella Mayer",
//     email: "isabella.mayerrs@gmail.com",
//     fotoPerfil: "https://i.pinimg.com/736x/cb/63/21/cb6321d204561ab7963f9bd63e0b4f83.jpg",
//   };
//   const { theme } = useTheme();
//   const isDarkTheme = theme === "dark";

//   useEffect(() => {
//     async function registerForPushNotificationsAsync() {
//       if (Device.isDevice) {
//         const { status: existingStatus } = await Notifications.getPermissionsAsync();
//         let finalStatus = existingStatus;

//         if (existingStatus !== "granted") {
//           const { status } = await Notifications.requestPermissionsAsync();
//           finalStatus = status;
//         }

//         if (finalStatus !== "granted") {
//           alert("Não foi possível obter permissão para notificações.");
//           return;
//         }

//         const token = (await Notifications.getExpoPushTokenAsync()).data;
//         setExpoPushToken(token);
//       } else {
//         alert("Notificações não são suportadas em simuladores.");
//       }
//     }

//     registerForPushNotificationsAsync();
//   }, []);

//   const enviarNotificacao = async () => {
//     await Notifications.scheduleNotificationAsync({
//       content: {
//         title: "Pedido Atualizado! 📦",
//         body: "Seu pedido foi enviado e está a caminho!",
//         sound: "default",
//       },
//       trigger: { seconds: 2 },
//     });
//   };

//   const renderPedido = ({ item }) => (
//     <View style={[styles.pedidoContainer, isDarkTheme && styles.darkPedidoContainer]}>
//       <Text style={[styles.loja, isDarkTheme && styles.darkText]}>{item.loja}</Text>
//       <Text style={[styles.numero, isDarkTheme && styles.darkSubText]}>Pedido concluído • Nº {item.numero}</Text>
//       <Text style={[styles.itens, isDarkTheme && styles.darkText]}>{item.itens}</Text>
//       {item.maisItens ? (
//         <Text style={[styles.maisItens, isDarkTheme && styles.darkSubText]}>{item.maisItens}</Text>
//       ) : null}
//       <View style={styles.acoesContainer}>
//         <TouchableOpacity>
//           <Text style={[styles.acaoTexto, isDarkTheme && styles.darkAcaoTexto]}>Ajuda</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={[styles.acaoTexto, isDarkTheme && styles.darkAcaoTexto]}>Adicionar à sacola</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View style={[styles.container, isDarkTheme && styles.darkContainer]}>
//       <View style={styles.header}>
//         <Text style={[styles.headerText, isDarkTheme && styles.darkHeaderText]}>Meu Perfil</Text>
//         <TouchableOpacity onPress={() => navigation.navigate("Configuracoes")}>
//           <Feather name="settings" size={28} color={isDarkTheme ? "#f5f5f5" : "#333"} />
//         </TouchableOpacity>
//       </View>

//       <Image source={{ uri: mockUser.fotoPerfil }} style={styles.fotoPerfil} />

//       <View style={[styles.card, isDarkTheme && styles.darkCard]}>
//         <Text style={[styles.perfilTitle, isDarkTheme && styles.darkText]}>{mockUser.nome}</Text>
//         <Text style={[styles.perfilInfo, isDarkTheme && styles.darkSubText]}>{mockUser.email}</Text>
//       </View>

//       <Text style={[styles.pedidosTitle, isDarkTheme && styles.darkText]}>Pedidos Atuais</Text>
//       <FlatList
//         data={pedidos}
//         renderItem={renderPedido}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={styles.lista}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#f9f9f9", padding: 20 },
//   darkContainer: { backgroundColor: "#121212" },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   headerText: { fontSize: 24, fontWeight: "bold", color: "#333" },
//   darkHeaderText: { color: "#f5f5f5" },
//   fotoPerfil: { width: 120, height: 120, borderRadius: 60, alignSelf: "center", marginBottom: 20 },
//   card: { backgroundColor: "#fff", padding: 20, borderRadius: 12, alignItems: "center", marginBottom: 20 },
//   darkCard: { backgroundColor: "#1e1e1e" },
//   perfilTitle: { fontSize: 22, fontWeight: "bold", color: "#333" },
//   perfilInfo: { fontSize: 16, color: "#555", marginTop: 5 },
//   pedidosTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10, color: "#333" },
//   lista: { paddingBottom: 16 },
//   pedidoContainer: { backgroundColor: "#fff", borderRadius: 8, padding: 16, marginBottom: 16, elevation: 2 },
//   darkPedidoContainer: { backgroundColor: "#1e1e1e" },
//   loja: { fontSize: 18, fontWeight: "bold", marginBottom: 4, color: "#333" },
//   numero: { fontSize: 14, color: "#666", marginBottom: 8 },
//   itens: { fontSize: 16, marginBottom: 4 },
//   maisItens: { fontSize: 14, color: "#666", marginBottom: 8 },
//   acoesContainer: { flexDirection: "row", justifyContent: "space-between" },
//   acaoTexto: { color: "#e53935", fontWeight: "bold", fontSize: 14 },
//   darkText: { color: "#f5f5f5" },
//   darkSubText: { color: "#aaa" },
//   darkAcaoTexto: { color: "#ff6f61" },
// });
