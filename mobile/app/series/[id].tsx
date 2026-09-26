import { useMemo, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { mockSeries } from '@/data/mock';
import { theme } from '@/constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SeriesDetailScreen() {
  const params = useLocalSearchParams<{ id: string }>();
  const series = useMemo(
    () => mockSeries.find((item) => item.id === params.id) ?? mockSeries[0],
    [params.id],
  );

  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = async () => {
    const key = 'dramora_favorites';
    const raw = await AsyncStorage.getItem(key);
    const current: string[] = raw ? JSON.parse(raw) : [];
    const next = current.includes(series.id)
      ? current.filter((item) => item !== series.id)
      : [...current, series.id];
    await AsyncStorage.setItem(key, JSON.stringify(next));
    setFavorite(next.includes(series.id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </Pressable>

        <Image source={{ uri: series.image }} style={styles.image} resizeMode="cover" />

        <View style={styles.metaRow}>
          <Text style={styles.badge}>{series.category}</Text>
          <Text style={styles.score}>{series.score} ★</Text>
        </View>

        <Text style={styles.title}>{series.title}</Text>
        <Text style={styles.subtitle}>{series.subtitle}</Text>

        <View style={styles.actionsRow}>
          <Pressable style={styles.primaryButton} onPress={() => router.push(`/watch/${series.id}`)}>
            <Text style={styles.primaryText}>İzle</Text>
          </Pressable>

          <Pressable style={styles.secondaryButton} onPress={toggleFavorite}>
            <Ionicons
              name={favorite ? 'heart' : 'heart-outline'}
              size={20}
              color={favorite ? '#ff6b9c' : '#fff'}
            />
          </Pressable>
        </View>

        <Text style={styles.description}>{series.description}</Text>

        <View style={styles.genreRow}>
          {series.genres.map((genre) => (
            <View key={genre} style={styles.genreBadge}>
              <Text style={styles.genreText}>{genre}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Bölümler</Text>

        {series.episodes.map((episode) => (
          <Pressable
            key={episode.id}
            style={[
              styles.episodeRow,
              episode.locked && styles.lockedRow,
              episode.premium && styles.premiumRow,
            ]}
            onPress={() => router.push(`/watch/${series.id}?episode=${episode.id}`)}
          >
            <View style={styles.episodeNumber}>
              <Text style={styles.episodeNumberText}>{episode.id.replace('e', '')}</Text>
            </View>

            <View style={styles.episodeInfo}>
              <Text style={styles.episodeTitle}>{episode.title}</Text>
              <Text style={styles.episodeMeta}>{episode.duration}</Text>
            </View>

            {episode.locked ? (
              <Ionicons name="lock-closed" size={18} color="#F5C76B" />
            ) : (
              <Ionicons name="play" size={18} color="#fff" />
            )}
          </Pressable>
        ))}
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
    paddingBottom: 40,
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 99,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 999,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 320,
    borderRadius: 22,
    marginBottom: 16,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  badge: {
    color: theme.accentSoft,
    backgroundColor: '#1C2430',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    fontWeight: '700',
  },
  score: {
    color: '#F5C76B',
    fontWeight: '800',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '800',
  },
  subtitle: {
    color: '#B8C1CA',
    marginTop: 6,
    fontSize: 16,
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    gap: 12,
  },
  primaryButton: {
    backgroundColor: theme.accent,
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 14,
    flex: 1,
    alignItems: 'center',
  },
  primaryText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 16,
  },
  secondaryButton: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#1C2430',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    color: '#D2D9E2',
    marginTop: 18,
    lineHeight: 22,
  },
  genreRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 18,
  },
  genreBadge: {
    backgroundColor: '#101C29',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  genreText: {
    color: '#D7E7F9',
    fontWeight: '700',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '800',
    marginTop: 26,
    marginBottom: 12,
  },
  episodeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0D1720',
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
  },
  lockedRow: {
    opacity: 0.7,
  },
  premiumRow: {
    borderWidth: 1,
    borderColor: '#F5C76B',
  },
  episodeNumber: {
    width: 34,
    height: 34,
    backgroundColor: '#1F2D3C',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  episodeNumberText: {
    color: '#fff',
    fontWeight: '800',
  },
  episodeInfo: {
    flex: 1,
    marginLeft: 12,
  },
  episodeTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  episodeMeta: {
    color: '#A0ABB6',
    marginTop: 4,
  },
});
