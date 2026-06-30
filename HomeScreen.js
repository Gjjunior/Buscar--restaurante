import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function HomeScreen({ navigation }) {

  function abrirSobre() {
    Alert.alert(
      'Buscar Sabor',
      'O Buscar Sabor ajuda você a encontrar restaurantes, consultar informações e realizar reservas de maneira simples e rápida.'
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.icone}>
        🍽️
      </Text>

      <Text style={styles.titulo}>
        Buscar Sabor
      </Text>

      <Text style={styles.subtitulo}>
        Bem-vindo!
      </Text>

      <Text style={styles.descricao}>
        Escolha uma categoria de restaurante, consulte informações e faça sua reserva em poucos passos.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Categorias')}
      >
        <Text style={styles.textoBotao}>
          Explorar Categorias
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoSecundario}
        onPress={abrirSobre}
      >
        <Text style={styles.textoBotaoSecundario}>
          Sobre o Aplicativo
        </Text>
      </TouchableOpacity>

      <Text style={styles.rodape}>
        Projeto Acadêmico • React Native
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    padding: 25,
  },

  icone: {
    fontSize: 60,
    textAlign: 'center',
    marginBottom: 10,
  },

  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#FF6600',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },

  descricao: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },

  botao: {
    backgroundColor: '#FF6600',
    height: 55,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  textoBotao: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  botaoSecundario: {
    borderWidth: 2,
    borderColor: '#FF6600',
    height: 55,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoBotaoSecundario: {
    color: '#FF6600',
    fontSize: 18,
    fontWeight: 'bold',
  },

  rodape: {
    marginTop: 50,
    textAlign: 'center',
    color: '#888',
    fontSize: 13,
  },

});