import { Link } from 'expo-router';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Atualizacoes() {
  const status = [
    { nome: 'Maria', tempo: 'Há 10 min' },
    { nome: 'João', tempo: 'Há 1 hora' },
    { nome: 'Ana', tempo: 'Há 2 horas' },
    { nome: 'Pedro', tempo: 'Há 5 horas' },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#25D366',
          }}
        >
          Atualizações
        </Text>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <Text
          style={{
            marginLeft: 15,
            marginBottom: 10,
            fontWeight: 'bold',
          }}
        >
          Status recentes
        </Text>

        {status.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 15,
              borderBottomWidth: 1,
              borderBottomColor: '#eee',
            }}
          >
            <View
              style={{
                width: 55,
                height: 55,
                borderRadius: 30,
                borderWidth: 3,
                borderColor: '#25D366',
                marginRight: 12,
              }}
            />

            <View>
              <Text style={{ fontWeight: 'bold' }}>
                {item.nome}
              </Text>

              <Text>{item.tempo}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <Pressable
        style={{
          position: 'absolute',
          right: 20,
          bottom: 90,
          backgroundColor: '#25D366',
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MaterialCommunityIcons
          name="camera"
          size={28}
          color="white"
        />
      </Pressable>

      {/* Footer */}
      
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