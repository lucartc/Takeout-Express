import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    LocalNotifications: {
      smallIcon: "takeout_express_foreground"
    },
    SplashScreen: {
      backgroundColor: '#A60000ff',
      androidSplashResourceName: 'takeout_express_foreground',
      launchShowDuration: 3000,
      androidScaleType: 'CENTER'
    }
  },
  appId: 'tech.jlucartc.takeout_express',
  appName: 'takeout_express',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
