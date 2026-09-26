export type Episode = {
  id: string;
  title: string;
  duration: string;
  locked?: boolean;
  premium?: boolean;
};

export type Series = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
  score: number;
  episodeCount: number;
  description: string;
  genres: string[];
  episodes: Episode[];
  vip?: boolean;
};

export const mockSeries: Series[] = [
  {
    id: 'sunset-echo',
    title: 'Sunset Echo',
    subtitle: 'Kayıp kalpler',
    image:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
    category: 'Romantik',
    score: 9.4,
    episodeCount: 12,
    description:
      'İstanbul’un gece hayatında birbirlerinin hayatını değiştiren iki gencin aşk hikâyesi.',
    genres: ['Aşk', 'Drama', 'Romantik'],
    episodes: [
      { id: 'e1', title: 'Bölüm 1', duration: '24 dk' },
      { id: 'e2', title: 'Bölüm 2', duration: '24 dk' },
      { id: 'e3', title: 'Bölüm 3', duration: '24 dk', premium: true },
      { id: 'e4', title: 'Bölüm 4', duration: '24 dk', locked: true },
    ],
  },
  {
    id: 'midnight-drift',
    title: 'Midnight Drift',
    subtitle: 'Saklı yol',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    category: 'Duygusal',
    score: 8.8,
    episodeCount: 8,
    description:
      'Gizemli bir şehirde bir araya gelen iki karakterin içsel yolculuğu.',
    genres: ['Duygusal', 'Aile', 'Fikir'],
    episodes: [
      { id: 'e1', title: 'Bölüm 1', duration: '22 dk' },
      { id: 'e2', title: 'Bölüm 2', duration: '22 dk' },
      { id: 'e3', title: 'Bölüm 3', duration: '22 dk' },
    ],
  },
  {
    id: 'starline',
    title: 'Starline',
    subtitle: 'Yıldızlar sahnesi',
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80',
    category: 'Genç',
    score: 9.1,
    episodeCount: 10,
    description:
      'Müziğin ve hayallerin peşinde koşan gençlerin yükselişi.',
    genres: ['Genç', 'Müzik', 'Drama'],
    episodes: [
      { id: 'e1', title: 'Bölüm 1', duration: '26 dk' },
      { id: 'e2', title: 'Bölüm 2', duration: '26 dk' },
      { id: 'e3', title: 'Bölüm 3', duration: '26 dk', vip: true },
    ],
  },
];

export const categories = [
  'Tümü',
  'Aşk',
  'Duygusal',
  'Genç',
  'Aile',
  'Gerilim',
  'Fantastik',
  'Komedi',
];

export const trending = ['Yeniler', 'Turkish Drama', 'Önerilenler', 'VIP', 'Kısa Bölümler'];
