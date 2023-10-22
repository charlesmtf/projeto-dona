import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

import logoImage from "../../../assets/logoDona.png"

const Home = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <View style={styles.container}>
      <Image
        source={logoImage}
        style={{ width: 267, height: 267 }}
      />
      <TextInput
        style={styles.input}
        placeholder="Login"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Menu", {name: "TelaMenu" })}>
        <Text style={styles.buttonText}>Anônimo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CBA3D8",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    width: 250,  // Defina a largura desejada para os campos de login e senha
    marginBottom: 10,  // Adicione um espaço entre os campos
  },
  button: {
    backgroundColor: "#73557C",
    borderRadius: 20,
    padding: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default Home;
