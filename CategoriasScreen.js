import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function CategoriasScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        🍽️ Buscar Sabor
      </Text>

      <Text style={styles.subtitulo}>
        Escolha uma categoria
      </Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('Restaurantes', {
            categoria: 'Lanches',
          })
        }
      >
        <Text style={styles.textoCard}>
          🍔 Lanches (Podrão)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('Restaurantes', {
            categoria: 'Pizzas',
          })
        }
      >
        <Text style={styles.textoCard}>
          🍕 Pizzas
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('Restaurantes', {
            categoria: 'Michelin',
          })
        }
      >
        <Text style={styles.textoCard}>
          ⭐ Restaurantes Michelin
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('Restaurantes', {
            categoria: 'Oriental',
          })
        }
      >
        <Text style={styles.textoCard}>
          🍣 Oriental
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF6600',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#DDD',
    elevation: 2,
  },

  textoCard: {
    fontSize: 20,
    fontWeight: '600',
  },

});