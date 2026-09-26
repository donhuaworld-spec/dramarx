import { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { mockSeries } from '@/data/mock';
import { theme } from '@/constants/theme';
import { getFavorites } from '@/utils/storage';

export default function LibraryScreen() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    getFavorites().then(setFavorites);
  }, []);

  const favoriteSeries = mockSeries.filter((item) => favorites.includes(item.id));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Kitaplık</Text>

        {favoriteSeries.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>Henüz favori yok</Text>
            <Text style={styles.emptyText}>
              Beğendiğin dizileri favorilere ekleyerek burada görebilirsin.
            </Text>
          </View>
        ) : (
          favoriteSeries.map((series) => (
            <Pressable
              key={series.id}
              style={styles.seriesCard}
              onPress={() => router.push(`/series/${series.id}`)}
            >
              <Image
                source={{ uri: series.image }}
                style={styles.image}
                resizeMode="cover"
              />
              <View style={styles.info}>
                <Text style={styles.seriesTitle}>{series.title}</Text>
                <Text style={styles.seriesMeta}>{series.episodeCount} Bölüm</Text>
              </View>
            </Pressable>
          ))
        )}
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
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 18,
  },
  emptyState: {
    backgroundColor: '#101821',
    borderRadius: 20,
    padding: 22,
  },
  emptyTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '800',
  },
  emptyText: {
    color: '#B4C0CC',
    marginTop: 8,
    lineHeight: 22,
  },
  seriesCard: {
    flexDirection: 'row',
    backgroundColor: '#0D1620',
    borderRadius: 18,
    padding: 10,
    marginBottom: 12,
  },
  image: {
    width: 110,
    height: 150,
    borderRadius: 14,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 12,
  },
  seriesTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },
  seriesMeta: {
    color: theme.textMuted,
    marginTop: 6,
  },
});
