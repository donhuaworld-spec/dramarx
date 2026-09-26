import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { mockSeries } from '@/data/mock';
import { theme } from '@/constants/theme';

export default function DiscoverScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Keşfet</Text>

        <View style={styles.chips}>
          {['Türler', 'Yeni', 'Popüler', 'VIP', 'Aile'].map((item) => (
            <Pressable key={item} style={styles.chip}>
              <Text style={styles.chipText}>{item}</Text>
            </Pressable>
          ))}
        </View>

        {mockSeries.map((series) => (
          <Pressable
            key={series.id}
            style={styles.seriesRow}
            onPress={() => router.push(`/series/${series.id}`)}
          >
            <Image
              source={{ uri: series.image }}
              style={styles.seriesImage}
              resizeMode="cover"
            />
            <View style={styles.seriesInfo}>
              <Text style={styles.seriesTitle}>{series.title}</Text>
              <Text style={styles.seriesCategory}>{series.category}</Text>
              <Text style={styles.seriesDescription}>{series.description}</Text>
            </View>
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
    paddingBottom: 32,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 16,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },
  chip: {
    backgroundColor: '#1F2A37',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
  },
  chipText: {
    color: '#fff',
    fontWeight: '700',
  },
  seriesRow: {
    flexDirection: 'row',
    backgroundColor: '#0F1723',
    borderRadius: 18,
    padding: 10,
    marginBottom: 12,
  },
  seriesImage: {
    width: 110,
    height: 150,
    borderRadius: 14,
  },
  seriesInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  seriesTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },
  seriesCategory: {
    color: theme.accentSoft,
    marginTop: 4,
    fontWeight: '700',
  },
  seriesDescription: {
    color: '#B8C1CA',
    marginTop: 8,
    lineHeight: 20,
  },
});
