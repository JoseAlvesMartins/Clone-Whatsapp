import { Link } from 'expo-router';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home() {
  const conversas = [
    { nome: 'Maria', mensagem: 'Oi, tudo bem?', hora: '09:15' },
    { nome: 'João', mensagem: 'Vamos jogar hoje?', hora: '10:30' },
    { nome: 'Ana', mensagem: 'Bom dia!', hora: '11:45' },
    { nome: 'Carlos', mensagem: 'Trabalho entregue.', hora: '13:20' },
    { nome: 'Pedro', mensagem: 'Até amanhã.', hora: '15:40' },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#ddd',
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#25D366',
          }}
        >
          WhatsApp
        </Text>
      </View>

      <ScrollView style={{ flex: 1 }}>
        {conversas.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              padding: 15,
              borderBottomWidth: 1,
              borderBottomColor: '#eee',
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#25D366',
                marginRight: 10,
              }}
            />

            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                {item.nome}
              </Text>

              <Text>{item.mensagem}</Text>
            </View>

            <Text>{item.hora}</Text>
          </View>
        ))}
      </ScrollView>

      <Pressable
        style={{
          position: 'absolute',
          right: 20,
          bottom: 90,
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: '#25D366',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MaterialCommunityIcons
          name="message"
          size={28}
          color="white"
        />
      </Pressable>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingVertical: 12,
          borderTopWidth: 1,
          borderTopColor: '#ddd',
        }}
      >
        <Link href="/" asChild>
          <Pressable style={{ alignItems: 'center' }}>
            <MaterialCommunityIcons
              name="message-text"
              size={24}
              color="#25D366"
            />
            <Text>Conversas</Text>
          </Pressable>
        </Link>

        <Link href="/atualizacoes" asChild>
          <Pressable style={{ alignItems: 'center' }}>
            <MaterialCommunityIcons
              name="update"
              size={24}
              color="#25D366"
            />
            <Text>Atualizações</Text>
          </Pressable>
        </Link>

        <Link href="/comunidades" asChild>
          <Pressable style={{ alignItems: 'center' }}>
            <MaterialCommunityIcons
              name="account-group"
              size={24}
              color="#25D366"
            />
            <Text>Comunidades</Text>
          </Pressable>
        </Link>

        <Link href="/ligacoes" asChild>
          <Pressable style={{ alignItems: 'center' }}>
            <MaterialCommunityIcons
              name="phone"
              size={24}
              color="#25D366"
            />
            <Text>Ligações</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}