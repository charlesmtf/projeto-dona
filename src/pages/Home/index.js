import React from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

// Importe a imagem da logo (assegure-se de ter o caminho correto)
import logoProjeto from './../../../assets/logoDona.png';

export default function App() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoProjeto} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => {
            // Adicione a lógica de login aqui
          }}
        >
          <Text style={styles.customButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => {
            // Adicione a lógica de cadastro aqui
          }}
        >
          <Text style={styles.customButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.anonimoButtonContainer}>
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => navigation.navigate('Menu')}
        >
          <Text style={styles.customButtonText}>Anônimo</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="center" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBA3D8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    margin: 20,
    height: 267,
    width: 269,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    marginVertical: 10,
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
  },
  customButton: {
    backgroundColor: 'purple',
    borderRadius: 10,
    padding: 10,
    width: '48%',
    alignItems: 'center',
  },
  customButtonText: {
    color: 'white',
  },
  anonimoButtonContainer: {
    marginTop: 20,
  },
});
