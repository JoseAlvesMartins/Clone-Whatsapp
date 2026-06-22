import { Link } from 'expo-router';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Ligacoes() {
  const ligacoes = [
    { nome: 'Maria', tipo: 'Recebida', hora: 'Ontem' },
    { nome: 'João', tipo: 'Perdida', hora: '09:30' },
    { nome: 'Carlos', tipo: 'Realizada', hora: '14:10' },
    { nome: 'Ana', tipo: 'Recebida', hora: '16:20' },
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
          Ligações
        </Text>
      </View>

      <ScrollView style={{ flex: 1 }}>
        {ligacoes.map((item, index) => (
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
                backgroundColor: '#25D366',
                marginRight: 12,
              }}
            />

            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: 'bold' }}>
                {item.nome}
              </Text>

              <Text>
                {item.tipo} • {item.hora}
              </Text>
            </View>

            <MaterialCommunityIcons
              name="phone"
              size={24}
              color="#25D366"
            />
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
          name="phone-plus"
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