import { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { mockSeries, Series } from '@/data/mock';
import { theme } from '@/constants/theme';
import { getFavorites } from '@/utils/storage';

export default function HomeScreen() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [featured] = useState<Series>(mockSeries[0]);

  useEffect(() => {
    getFavorites().then(setFavorites);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.brand}>Dramora</Text>
          <Pressable style={styles.searchButton}>
            <Text style={styles.searchText}>Ara</Text>
          </Pressable>
        </View>

        <Pressable onPress={() => router.push(`/watch/${featured.id}`)}>
          <Image
            source={{ uri: featured.image }}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['transparent', 'rgba(9,12,17,0.9)', 'rgba(9,12,17,1)']}
            style={styles.heroOverlay}
          >
            <Text style={styles.heroTag}>Yeni Bölüm</Text>
            <Text style={styles.heroTitle}>{featured.title}</Text>
            <Text style={styles.heroSubtitle}>{featured.subtitle}</Text>
            <Text style={styles.heroMeta}>
              {featured.score} ★ • {featured.episodeCount} Bölüm
            </Text>
          </LinearGradient>
        </Pressable>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Devam Et</Text>
          <Text style={styles.sectionLink}>Hepsi</Text>
        </View>

        <FlatList
          data={mockSeries}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.horizontalList}
          renderItem={({ item }) => (
            <Pressable
              style={styles.card}
              onPress={() => router.push(`/series/${item.id}`)}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardMeta}>{item.category}</Text>
            </Pressable>
          )}
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Favoriler</Text>
          <Text style={styles.sectionLink}>{favorites.length}</Text>
        </View>

        <FlatList
          data={mockSeries.filter((item) => favorites.includes(item.id))}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.horizontalList}
          renderItem={({ item }) => (
            <Pressable
              style={styles.card}
              onPress={() => router.push(`/series/${item.id}`)}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardMeta}>Kayıtlı</Text>
            </Pressable>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  brand: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '800',
  },
  searchButton: {
    backgroundColor: '#1B2430',
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  searchText: {
    color: '#ffffff',
    fontWeight: '700',
  },
  heroImage: {
    width: '100%',
    height: 300,
    borderRadius: 22,
  },
  heroOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 22,
    padding: 18,
    justifyContent: 'flex-end',
  },
  heroTag: {
    color: theme.accentSoft,
    fontWeight: '700',
    marginBottom: 8,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800',
  },
  heroSubtitle: {
    color: '#D9E2EC',
    fontSize: 15,
    marginTop: 4,
  },
  heroMeta: {
    color: '#AEB9C4',
    fontSize: 12,
    marginTop: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
  },
  sectionLink: {
    color: theme.accentSoft,
    fontWeight: '700',
  },
  horizontalList: {
    paddingRight: 12,
  },
  card: {
    width: 150,
    marginRight: 12,
  },
  cardImage: {
    width: 150,
    height: 200,
    borderRadius: 16,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 8,
  },
  cardMeta: {
    color: theme.textMuted,
    marginTop: 4,
  },
});
