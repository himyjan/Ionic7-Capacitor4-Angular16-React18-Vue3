import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'angular-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
};

export default config;
