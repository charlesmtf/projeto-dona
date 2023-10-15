import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoProjeto from './../../../assets/logoDona.png';

export default function Menu() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoProjeto} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Localizacao')}>
        <Text style={styles.buttonText}>Alimentos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => { /* Adicione a ação desejada */ }}>
        <Text style={styles.buttonText}>Brinquedos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => { /* Adicione a ação desejada */ }}>
        <Text style={styles.buttonText}>Calçados</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => { /* Adicione a ação desejada */ }}>
        <Text style={styles.buttonText}>Dinheiro/Pix</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => { /* Adicione a ação desejada */ }}>
        <Text style={styles.buttonText}>Eletrodomésticos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => { /* Adicione a ação desejada */ }}>
        <Text style={styles.buttonText}>Móveis</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => { /* Adicione a ação desejada */ }}>
        <Text style={styles.buttonText}>Outros</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBA3D8',
    alignItems: 'center',
  },
  logo: {
    margin: 20,
    height: 80,
    width: 80,
  },
  button: {
    backgroundColor: 'purple',
    borderRadius: 20,
    padding: 10,
    width: '50%',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
  },
  goBackButton: {
    backgroundColor: 'purple',
    borderRadius: 20,
    padding: 5,
    width: '40%',
    alignItems: 'center',
    margin: 10,
    position: 'absolute',
    bottom: 20,
  },
});
