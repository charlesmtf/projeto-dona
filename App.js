import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import logoProjeto from './assets/logoDona.png'
import retangulo from  './assets/retanguloRoxo.png'
export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoProjeto}/>
      <StatusBar style="auto" />
      <Image style={styles.retanguloR} source={retangulo}/>
    </View>
  );
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.retanguloR} source={retangulo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBA3D8',
    alignItems: 'center',

  },

  logo:{
    margin: 110,
    height: 267,
    width: 269,

  }
  }

);

