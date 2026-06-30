import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function fazerLogin() {
    if (email.trim() === '') {
      Alert.alert('Atenção', 'Digite seu e-mail.');
      return;
    }

    if (senha.trim() === '') {
      Alert.alert('Atenção', 'Digite sua senha.');
      return;
    }

    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>
        🍽️
      </Text>

      <Text style={styles.titulo}>
        Buscar Sabor
      </Text>

      <Text style={styles.subtitulo}>
        Encontre o restaurante ideal para sua próxima refeição.
      </Text>

      <Text style={styles.label}>
        E-mail
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>
        Senha
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={fazerLogin}
      >
        <Text style={styles.textoBotao}>
          Entrar
        </Text>
      </TouchableOpacity>

      <Text style={styles.rodape}>
        Trabalho Prático • React Native
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: 25,
  },

  logo: {
    fontSize: 55,
    textAlign: 'center',
  },

  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FF6600',
    marginTop: 10,
  },

  subtitulo: {
    textAlign: 'center',
    color: '#666',
    marginTop: 8,
    marginBottom: 40,
    fontSize: 15,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  botao: {
    backgroundColor: '#FF6600',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },

  rodape: {
    marginTop: 40,
    textAlign: 'center',
    color: '#888',
    fontSize: 13,
  },

});