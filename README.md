# DramaRx - Drama Wave Clone 🎬

Drama Wave'in tüm özelliklerini içeren modern bir drama streaming platformu.

## 🎯 Özellikler

### 1. Ekran Üzeri Yorumlar
- Gerçek zamanlı yorum sistemi (Socket.IO)
- Izlerken canlı yorum bırakma
- Yorum beğenme ve etkileşim
- User engagement ve topluluk

### 2. Çevrimdışı İzleme
- Bölümleri indirip offline izleme
- İndirme yönetimi
- Kalite seçimi
- Depolama optimizasyonu

### 3. Dikey Tam Ekran Akışı
- Mobile-first tasarım (9:16)
- Tam ekran dikey video
- Otomatik döndürme
- Smooth scrolling

### 4. Hızlı ve Sürükleyici Diziler
- Mini dizi formatı (15-30 dakika)
- Binge-worthy içerik
- Bölüm takibi
- Otomatik devam

### 5. 1080P HD Yayın
- Çoklu kalite seçenekleri (480p, 720p, 1080p)
- HLS Adaptive Bitrate Streaming
- Otomatik kalite seçimi
- Bant genişliği optimizasyonu

### 6. Haftalık Güncellemeler
- Yeni dizi yayınları
- Bölüm planlama
- Bildirim sistemi
- Yayın takvimi

### 7. Çok Dilde Altyazı
- **Desteklenen Diller:** TR, EN, ES, FR, DE, JA, KO
- Gerçek zamanlı altyazı
- Özelleştirilebilir boyut/renk
- Çeviri kalitesi

### 8. Abonelik Sistemi

#### Free (Ücretsiz)
- Reklam destekli akış
- 720p kalitesi
- Sınırlı özellikler

#### Premium ($4.99/ay)
- Reklamsız akış
- 1080P HD
- Offline indirme
- 2 eş zamanlı akış
- Çoklu dilde altyazı

#### VIP ($9.99/ay)
- Tüm Premium özellikleri
- Özel içerik
- Öncelikli destek
- 4 eş zamanlı akış
- Yeni bölümlere erken erişim

### 9. Kişiselleştirilmiş İçerik Akışı
- AI-tabanlı öneriler
- Tür tercihleri
- İzleme geçmişi analizi
- Trendalama algoritmalar
- Kullanıcı profili öğrenme

### 10. Reels ve Mini Diziler
- Kısa video formatı (15-60 saniye)
- Mini diziler (15-30 dakika)
- Kaydırılabilir arayüz
- Mixed content format

## 📁 Proje Yapısı

```
dramarx/
├── backend/
│   ├── models/          # Database models
│   ├── routes/          # API endpoints
│   ├── middleware/      # Custom middleware
│   ├── server.js        # Main server
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── redux/       # State management
│   │   ├── styles/      # Tailwind CSS
│   │   └── App.jsx
│   └── public/
├── docs/                # Documentation
│   ├── API.md
│   ├── FEATURES.md
│   └── SETUP.md
└── .gitignore
```

## 🚀 Teknoloji Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **Real-time:** Socket.IO
- **Video:** HLS Protocol

### Frontend
- **Framework:** React 18
- **State:** Redux
- **Styling:** Tailwind CSS
- **Video Player:** HLS.js, Video.js
- **HTTP Client:** Axios
- **Routing:** React Router v6

### DevOps
- **Version Control:** Git
- **Package Manager:** npm/yarn
- **Environment:** .env configuration

## 📦 Kurulum

### Gereksinimler
- Node.js 14+
- MongoDB
- npm / yarn

### 1. Repository'i Klonla
```bash
git clone https://github.com/donhuaworld-spec/dramarx.git
cd dramarx
```

### 2. Bağımlılıkları Yükle
```bash
npm run install-all
```

### 3. Environment Ayarları

**Backend (.env)**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/dramarx
JWT_SECRET=your-secret-key
CLIENT_URL=http://localhost:3000
NODE_ENV=development
```

**Frontend (.env)**
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_SOCKET_URL=http://localhost:5000
```

### 4. Uygulamayı Başlat

**Terminal 1 - Backend**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend**
```bash
cd frontend
npm start
```

Uygulama şu adreste açılacak: `http://localhost:3000`

## 📊 API Endpoints

### Auth
- `POST /api/auth/register` - Kayıt ol
- `POST /api/auth/login` - Giriş yap
- `GET /api/auth/me` - Mevcut kullanıcı

### Videos
- `GET /api/videos` - Tüm videoları getir
- `GET /api/videos/:id` - Video detayları
- `POST /api/videos` - Video oluştur
- `PUT /api/videos/:id` - Video güncelle
- `DELETE /api/videos/:id` - Video sil

### Users
- `GET /api/users/:id` - Kullanıcı profili
- `PUT /api/users/:id` - Profili güncelle
- `POST /api/users/:id/favorites/:videoId` - Favorilere ekle
- `GET /api/users/:id/history` - İzleme geçmişi

### Subscriptions
- `GET /api/subscriptions/plans` - Abonelik planları
- `POST /api/subscriptions/subscribe` - Abone ol
- `POST /api/subscriptions/:id/cancel` - İptal et

### Comments
- `GET /api/comments/:videoId` - Yorumları getir
- `POST /api/comments/:videoId` - Yorum ekle
- `PUT /api/comments/:videoId/comment/:commentId/like` - Yorum beğen

### Recommendations
- `GET /api/recommendations/user/:userId` - Kişisel öneriler
- `GET /api/recommendations/trending` - Trendler

## 🎨 UI/UX Özellikleri

- **Responsive Design:** Mobile, tablet, desktop uyumlu
- **Dark Mode:** Varsayılan koyu tema
- **Smooth Animations:** Geçiş animasyonları
- **Loading States:** Yükleme göstergeleri
- **Error Handling:** Hata yönetimi
- **Accessibility:** Erişilebilirlik desteği

## 🔒 Güvenlik

- JWT token-based authentication
- Password hashing (bcryptjs)
- CORS protection
- Input validation
- Rate limiting (yapılacak)
- SQL injection prevention

## 📈 Gelecek Özellikler

- [ ] Social sharing
- [ ] User ratings & reviews
- [ ] Series watchlist
- [ ] Parental controls
- [ ] Multi-device sync
- [ ] Download library management
- [ ] Advanced search filters
- [ ] User recommendations algorithm improvement
- [ ] Live streaming support
- [ ] Community features

## 🤝 Katkıda Bulunma

Pull requestleri hoş karşılarız! Büyük değişiklikler için lütfen önce bir issue açın.

## 📝 Lisans

MIT License - Detaylar için [LICENSE](LICENSE) dosyasına bakın

## 📧 İletişim

- **GitHub:** [@donhuaworld-spec](https://github.com/donhuaworld-spec)
- **Email:** contact@example.com

---

**Made with ❤️ by DramaRx Team**
