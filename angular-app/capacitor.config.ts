import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'angular-app',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    url: 'http://localhost:4200/',
    cleartext: true,
  },
};

export default config;
