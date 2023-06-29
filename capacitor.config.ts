import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    LocalNotifications: {
      smallIcon: "takeout_express"
    }
  },
  appId: 'io.ionic.starter',
  appName: 'takeout_express',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
