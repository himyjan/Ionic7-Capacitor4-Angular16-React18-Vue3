import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'vue-app',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'http://localhost:8080/',
    cleartext: true,
  },
};

export default config;
