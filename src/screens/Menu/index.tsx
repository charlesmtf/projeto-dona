import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";
import logoImage from "../../../assets/logoDona.png";

const Menu = () => {
    const params = useRoute()
    const navigation = useNavigation<propsStack>();

    console.log(params?.params?.name)
  return (
    <View style={styles.container}>
      <Image
        source={logoImage}
        style={styles.logo}
      />

      <Text style={styles.text}>O que você deseja doar?</Text>

      <TouchableOpacity style={styles.button} onPress={() => {/* Ação para Alimentos 1 */}}>
        <Text style={styles.buttonText}>Alimentos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {/* Ação para Alimentos 2 */}}>
        <Text style={styles.buttonText}>Alimentos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {/* Ação para Alimentos 3 */}}>
        <Text style={styles.buttonText}>Alimentos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {/* Ação para Alimentos 4 */}}>
        <Text style={styles.buttonText}>Alimentos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {/* Ação para Alimentos 5 */}}>
        <Text style={styles.buttonText}>Alimentos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {/* Ação para Alimentos 6 */}}>
        <Text style={styles.buttonText}>Alimentos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {/* Ação para Alimentos 7 */}}>
        <Text style={styles.buttonText}>Alimentos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button,{ backgroundColor: "#73557C"}]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CBA3D8",
    alignItems: "center",
  },
  logo: {
    width: 91,
    height: 92,
    marginTop: 21,
  },
  text: {
    
    
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  button: {
    backgroundColor: "#6B007B", 
    borderRadius: 20,
    width: 225,
    height: 40,
    marginTop: 10,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default Menu;
