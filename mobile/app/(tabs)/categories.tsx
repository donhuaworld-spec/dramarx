import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { categories, trending } from '@/data/mock';
import { theme } from '@/constants/theme';

export default function CategoriesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Kategoriler</Text>

        <View style={styles.grid}>
          {categories.map((item) => (
            <Pressable key={item} style={styles.categoryBox}>
              <Text style={styles.categoryText}>{item}</Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.subtitle}>Trendler</Text>
        <View style={styles.chips}>
          {trending.map((tag) => (
            <Pressable key={tag} style={styles.chip}>
              <Text style={styles.chipText}>{tag}</Text>
            </Pressable>
          ))}
        </View>
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
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 18,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  categoryBox: {
    width: '47%',
    backgroundColor: '#101922',
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1E2A37',
  },
  categoryText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
  subtitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '800',
    marginTop: 20,
    marginBottom: 10,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    backgroundColor: '#1C2430',
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  chipText: {
    color: '#fff',
    fontWeight: '600',
  },
});
