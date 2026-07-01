import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function ReservaScreen({ route, navigation }) {

  const { restaurante } = route.params || {};

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [pessoas, setPessoas] = useState('');

  function confirmarReserva() {

    if (
      nome.trim() === '' ||
      telefone.trim() === '' ||
      data.trim() === '' ||
      horario.trim() === '' ||
      pessoas.trim() === ''
    ) {
      Alert.alert(
        'Atenção',
        'Preencha todos os campos.'
      );
      return;
    }

    navigation.navigate('Confirmacao', {
      restaurante,
      nome,
      telefone,
      data,
      horario,
      pessoas,
    });
  }

  if (!restaurante) {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>
          Restaurante não encontrado.
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Categorias')}
        >
          <Text style={styles.textoBotao}>
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Reserva de Mesa
      </Text>

      <Text style={styles.restaurante}>
        🍽️ {restaurante.nome}
      </Text>

      <Text style={styles.subtitulo}>
        Preencha seus dados
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        keyboardType="phone-pad"
        value={telefone}
        onChangeText={setTelefone}
      />

      <TextInput
        style={styles.input}
        placeholder="Data (dd/mm/aaaa)"
        value={data}
        onChangeText={setData}
      />

      <TextInput
        style={styles.input}
        placeholder="Horário"
        value={horario}
        onChangeText={setHorario}
      />

      <TextInput
        style={styles.input}
        placeholder="Quantidade de pessoas"
        keyboardType="numeric"
        value={pessoas}
        onChangeText={setPessoas}
      />

      <View style={styles.aviso}>
        <Text style={styles.tituloAviso}>
          ⚠ Aviso
        </Text>

        <Text style={styles.textoAviso}>
          Sua reserva será mantida por até
          <Text style={styles.destaque}> 10 minutos </Text>
          após o horário informado.
        </Text>

        <Text style={styles.textoAviso}>
          Após esse período, a mesa poderá ser disponibilizada para clientes presentes na lista de espera do restaurante.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={confirmarReserva}
      >
        <Text style={styles.textoBotao}>
          Confirmar Reserva
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
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF6600',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  restaurante: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  aviso: {
    backgroundColor: '#FFF8E1',
    borderLeftWidth: 5,
    borderLeftColor: '#FF9800',
    padding: 15,
    borderRadius: 8,
    marginVertical: 20,
  },

  tituloAviso: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },

  textoAviso: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },

  destaque: {
    fontWeight: 'bold',
    color: '#D84315',
  },

  botao: {
    backgroundColor: '#FF6600',
    height: 55,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoBotao: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

});
