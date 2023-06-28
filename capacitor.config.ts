import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '600372425447-h4m6utm8okg50t955vbe27h4ksikvn8n.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  },
  appId: 'io.ionic.myOwnId',
  appName: 'ionic-app',
  webDir: 'build',
  bundledWebRuntime: false
};

export default config;
