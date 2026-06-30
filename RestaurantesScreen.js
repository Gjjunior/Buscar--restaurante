import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function RestaurantesScreen({ route, navigation }) {
    const { categoria } = route.params;
    console.log(categoria);

  const restaurantes = {

    Lanches: [
      {
        nome: 'Podão Mineiro',
        telefone: '(31) 3333-1111',
        endereco: 'Rua Amazonas, 120',
        reserva: true,
      },
      {
        nome: 'Big Burguer',
        telefone: '(31) 3333-1112',
        endereco: 'Av. Brasil, 560',
        reserva: true,
      },
      {
        nome: 'Mega Lanches',
        telefone: '(31) 3333-1113',
        endereco: 'Rua da Bahia, 45',
        reserva: false,
      },
    ],

    Pizzas: [
      {
        nome: 'Pizzaria Itália',
        telefone: '(31) 3333-2221',
        endereco: 'Rua Central, 120',
        reserva: true,
      },
      {
        nome: 'Bella Massa',
        telefone: '(31) 3333-2222',
        endereco: 'Av. Afonso Pena, 800',
        reserva: true,
      },
      {
        nome: 'Pizza Prime',
        telefone: '(31) 3333-2223',
        endereco: 'Rua das Flores, 95',
        reserva: false,
      },
    ],

    Michelin: [
      {
        nome: 'Maison Gourmet',
        telefone: '(31) 3333-3331',
        endereco: 'Lourdes',
        reserva: true,
      },
      {
        nome: 'Le Chef',
        telefone: '(31) 3333-3332',
        endereco: 'Savassi',
        reserva: true,
      },
      {
        nome: 'Essência',
        telefone: '(31) 3333-3333',
        endereco: 'Belvedere',
        reserva: false,
      },
    ],

    Oriental: [
      {
        nome: 'Sushi Prime',
        telefone: '(31) 3333-4441',
        endereco: 'Rua Japão, 60',
        reserva: true,
      },
      {
        nome: 'Tóquio House',
        telefone: '(31) 3333-4442',
        endereco: 'Savassi',
        reserva: true,
      },
      {
        nome: 'Sabor Oriental',
        telefone: '(31) 3333-4443',
        endereco: 'Centro',
        reserva: false,
      },
    ],

  };

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        {categoria}
      </Text>

      {restaurantes[categoria].map((item, index) => (

        <View
          key={index}
          style={styles.card}
        >

          <Text style={styles.nome}>
            {item.nome}
          </Text>

          <Text>📍 {item.endereco}</Text>

          <Text>📞 {item.telefone}</Text>

          <Text
            style={{
              color: item.reserva ? 'green' : 'red',
              marginTop: 8,
            }}
          >
            {item.reserva
              ? '✅ Reservas disponíveis'
              : '❌ Sem disponibilidade'}
          </Text>

          {item.reserva && (

  <TouchableOpacity
    style={styles.botao}
    onPress={() =>
      navigation.navigate('Reserva', {
        restaurante: item,
      })
    }
  >

    <Text style={styles.textoBotao}>
      Reservar
    </Text>

  </TouchableOpacity>

)}
        </View>

      ))}

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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF6600',
    textAlign: 'center',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  botao: {
    backgroundColor: '#FF6600',
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

});