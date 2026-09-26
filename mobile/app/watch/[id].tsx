import { useLocalSearchParams } from 'expo-router';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { VideoView, useVideoPlayer } from 'expo-video';
import { Ionicons } from '@expo/vector-icons';
import { mockSeries } from '@/data/mock';
import { theme } from '@/constants/theme';

export default function WatchScreen() {
  const params = useLocalSearchParams<{ id: string; episode?: string }>();
  const series = mockSeries.find((item) => item.id === params.id) ?? mockSeries[0];

  const player = useVideoPlayer(
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    (player) => {
      player.loop = true;
      player.muted = false;
    },
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.playerWrapper}>
        <VideoView
          style={styles.video}
          player={player}
          allowsFullscreen
          allowsPictureInPicture
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{series.title}</Text>
        <Text style={styles.meta}>
          {series.category} • {params.episode ?? 'Bölüm 1'}
        </Text>

        <Pressable style={styles.vipButton}>
          <Ionicons name="diamond-outline" size={16} color="#fff" />
          <Text style={styles.vipText}>VIP İçerik</Text>
        </Pressable>

        <Text style={styles.description}>
          Bu izleme ekranı, mobil uygulamada kısa dramaların tam ekran gibi deneyimini
          sunar. Kullanıcı, bölüm detaylarından direkt izleme akışına geçer.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  playerWrapper: {
    width: '100%',
    height: 240,
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '800',
  },
  meta: {
    color: '#B7C4CF',
    fontSize: 14,
    marginTop: 8,
  },
  vipButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#1F2430',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    width: 150,
    marginTop: 18,
  },
  vipText: {
    color: '#fff',
    fontWeight: '700',
  },
  description: {
    color: '#D8E2EC',
    lineHeight: 24,
    marginTop: 18,
  },
});
