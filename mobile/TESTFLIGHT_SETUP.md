# TestFlight Setup Guide for Dramora iOS App

## Prerequisites
- Apple Developer Account with Team Admin or Account Holder role
- App Store Connect access
- Xcode Command Line Tools installed
- EAS CLI installed (`npm install -g eas-cli`)
- Valid iOS signing certificates

## iOS Bundle Identifier
- **Bundle ID**: `com.dramora.mobileapp`

## Setup Steps

### 1. Create App in App Store Connect
- [ ] Go to [App Store Connect](https://appstoreconnect.apple.com/)
- [ ] Click "My Apps"
- [ ] Click the "+" button and select "New App"
- [ ] Fill in the following:
  - **Platform**: iOS
  - **Name**: Dramora
  - **Primary Language**: English
  - **Bundle ID**: com.dramora.mobileapp
  - **SKU**: dramora-ios-2024 (unique identifier)
  - **User Access**: Select appropriate access level

### 2. Link Expo to App Store Connect
Run the following command in the `/mobile` directory:

```bash
eas build:configure
```

Select iOS when prompted, then authenticate with your Apple credentials.

### 3. Create Production Build
```bash
eas build --platform ios --profile production
```

This will:
- Build your iOS app with Release configuration
- Create necessary provisioning profiles and certificates
- Output an `.ipa` file ready for TestFlight

### 4. Submit to TestFlight
After the build completes, submit it:

```bash
eas submit --platform ios --profile production --path <build-ipa-path>
```

Or use App Store Connect directly:
- Navigate to TestFlight in App Store Connect
- Select your build and click "Add for Testing"
- Add internal or external testers

### 5. Add Testers
- Internal Testers: Add Apple IDs of team members
- External Testers: Create TestFlight groups and share via email

## Build Configuration Details

### app.json
- Bundle Identifier: `com.dramora.mobileapp`
- Version: 1.0.0
- Build Number: Incremented per build
- iOS entitlements configured for production

### eas.json Profiles
- **production**: App Store distribution with Release configuration
- **preview**: Internal testing with Release build
- **development**: Development client for local testing

## Important Notes
- Increment `buildNumber` in `app.json` for each new build submitted to TestFlight
- Keep all signing certificates and provisioning profiles up to date
- Test on actual iOS devices before TestFlight submission
- Ensure all app permissions are properly configured in app.json

## Troubleshooting
If builds fail:
1. Run `expo-doctor` to check dependencies
2. Verify Apple Developer account status
3. Check iOS signing certificate validity
4. Review build logs in EAS Dashboard

## Next Steps
After completing setup:
1. [ ] Configure app metadata in App Store Connect
2. [ ] Add app screenshots and descriptions
3. [ ] Set up privacy policy URL
4. [ ] Complete app information section
5. [ ] Submit for review after internal testing
