# Dramora Mobile

Expo + React Native + TypeScript uygulaması.

## Kurulum

```bash
cd mobile
npm install
npx expo start
```

## iOS çalıştırma

```bash
npx expo run:ios
```

## EAS Production Build

```bash
npx expo install expo-router expo-video @react-native-async-storage/async-storage
npx eas login
npx eas build --platform ios --profile production
```

## TestFlight / App Store Submit

```bash
npx eas submit --platform ios --profile production
```

## Özellikler

- App Name: Dramora
- Slug: dramora
- iOS Bundle Identifier: com.dramora.mobileapp
- Version: 1.0.0
- iOS buildNumber: 1
- Duygusal, koyu tema ve mobil odaklı kısa drama deneyimi
- Mock data ile çalışan demo içerik akışı
