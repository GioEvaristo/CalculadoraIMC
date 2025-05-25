import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground, SafeAreaView} from 'react-native';
import {useState} from 'react';

export default function App() {
  const logo = require('./assets/imc_logo.png');
  const background = require('./assets/icon.png');

  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');
  const [imc, setIMC] = useState(0);
  

  function calculaIMC(altura: number, quilos: number){
    let resultado = '';

    altura = altura / 100;
    const imc = quilos / (altura * altura);

    if (imc < 17) {
      resultado = ('Muito abaixo do peso');
    } else if (imc > 17 && imc <= 18.49) {
      resultado = ('Abaixo do peso');
    } else if (imc >= 18.5 && imc <= 24.99) {
      resultado = ('Peso normal');
    } else if (imc >= 25 && imc <= 29.99) {
      resultado = ('Acima do peso');
    } else if (imc >= 30 && imc <= 34.99) {
      resultado = ('Obesidade I');
    } else {
      resultado = ('Obesidade II');
    }

    setIMC(imc);
    setResultado(resultado);
    return({setIMC});
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}></Image>
      <Text style={styles.text}>Calculadora de IMC</Text>
      <Text style={styles.subtext}>Altura: <TextInput style={styles.input} onChangeText={(valor) => setAltura(valor)} value={altura} placeholder='Digite sua altura em cm' keyboardType='decimal-pad'></TextInput></Text>
      <Text style={styles.subtext}>Peso: <TextInput style={styles.input} onChangeText={(valor) => setPeso(valor)} value={peso} placeholder='Digite seu peso em quilos' keyboardType='decimal-pad'></TextInput></Text>
      <Button onPress={() => calculaIMC(parseFloat(altura), parseFloat(peso))} title='Calcular'></Button>
      <Text style={styles.subtext}>IMC = {imc}</Text>
      <Text style={styles.subtext}>{resultado}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7fc8f8'
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ff6392',
    textAlign: 'center',
  },
  subtext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffe45e',
  },
  logo: {
    width: 80,
    height: 80,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    borderWidth: 3,
    borderColor: '#ff629d',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#5aa9e6',
    margin: 3,
  },
});
