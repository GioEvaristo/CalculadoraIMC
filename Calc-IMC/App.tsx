import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground, SafeAreaView} from 'react-native';
import {useState} from 'react';

export default function App() {
  const logo = require('./assets/imc_logo.png');
  const background = require('./assets/icon.png');

  const[mensagem, setMensagem] = useState('');
  const[imc, setIMC] = useState('');
  

  function calculaIMC(altura: number, quilos: number){


    altura = altura / 100;
    imc = quilos / (altura * altura);
    return imc;

    console.log(imc);
  }

  function verificarIMC(imc) {
    let mensagem = '';

  if (imc < 17) {
    mensagem = ('Muito abaixo do peso');
  } else if (imc > 17 && imc <= 18.49) {
    mensagem = ('Abaixo do peso');
  } else if (imc >= 18.5 && imc <= 24.99) {
    mensagem = ('Peso normal');
  } else if (imc >= 25 && imc <= 29.99) {
    mensagem = ('Acima do peso');
  } else if (imc >= 30 && imc <= 34.99) {
    mensagem = ('Obesidade I');
  } else {
    mensagem = ('Obesidade II');
  }
}

  return (
    <View style={styles.container}>
       <Image source={logo} style={styles.logo}></Image>
      <Text style={styles.text}>Calculadora de IMC</Text>
      <Text style={styles.subtext}>Altura: <TextInput style={styles.input} placeholder='Digite sua altura em cm' keyboardType='decimal-pad'></TextInput></Text>
      <Text style={styles.subtext}>Peso: <TextInput style={styles.input} placeholder='Digite seu peso em quilos' keyboardType='decimal-pad'></TextInput></Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffe45e',
  },
  input: {
    fontSize: 20,
  },
  logo: {
    width: 80,
    height: 80,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  img: {
    flex: 1,
    justifyContent: 'center',
  },
  sorteado:{
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
    borderWidth: 3,
    borderColor: '#ff629d',
    borderRadius: 200,
    padding: 12,
    backgroundColor: '#5aa9e6',
  }
});
