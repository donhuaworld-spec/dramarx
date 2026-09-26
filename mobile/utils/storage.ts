import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = 'dramora_favorites';

export const getFavorites = async (): Promise<string[]> => {
  try {
    const raw = await AsyncStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const toggleFavorite = async (id: string): Promise<string[]> => {
  const current = await getFavorites();
  const next = current.includes(id)
    ? current.filter((item) => item !== id)
    : [...current, id];
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
  return next;
};
