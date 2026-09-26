import { StyleSheet, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>D</Text>
        </View>

        <Text style={styles.name}>Dramora Üyesi</Text>
        <Text style={styles.plan}>VIP • 2 aylık</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Abonelik</Text>
          <Text style={styles.cardText}>VIP üyeliği ile tüm içeriklere erişim</Text>
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Profil Düzenle</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  content: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: theme.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 38,
    fontWeight: '800',
  },
  name: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800',
    marginTop: 18,
  },
  plan: {
    color: theme.accentSoft,
    fontWeight: '700',
    marginTop: 6,
  },
  card: {
    width: '100%',
    backgroundColor: '#101C29',
    borderRadius: 18,
    padding: 18,
    marginTop: 28,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
  },
  cardText: {
    color: '#B9C5D0',
    marginTop: 8,
    lineHeight: 20,
  },
  button: {
    width: '100%',
    marginTop: 20,
    backgroundColor: theme.accent,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },
});
