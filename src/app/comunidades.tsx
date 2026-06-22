import { Link } from 'expo-router';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Comunidades() {
  const comunidades = [
    'Turma Desenvolvimento',
    'Amigos Gamers',
    'Futebol da Escola',
    'Projeto React Native',
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
          Comunidades
        </Text>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <Pressable
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
              borderRadius: 12,
              backgroundColor: '#25D366',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}
          >
            <MaterialCommunityIcons
              name="plus"
              size={30}
              color="white"
            />
          </View>

          <Text style={{ fontWeight: 'bold' }}>
            Nova Comunidade
          </Text>
        </Pressable>

        {comunidades.map((item, index) => (
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
                borderRadius: 12,
                backgroundColor: '#ddd',
                marginRight: 10,
              }}
            />

            <Text style={{ fontWeight: 'bold' }}>
              {item}
            </Text>
          </View>
        ))}
      </ScrollView>

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