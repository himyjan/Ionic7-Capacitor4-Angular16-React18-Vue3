import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'nuxt-app',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'http://localhost:3000/',
    cleartext: true,
  },
};

export default config;
