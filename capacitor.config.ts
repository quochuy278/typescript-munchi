import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: "munchi.customer.mobileapp",
  appName: "typescript-munchi",
  webDir: "build",
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      serverClientId:
        "879088519061-4dkrii7924ku3gur6sgigt985mn76d6c.apps.googleusercontent.com",
    },
  },
};

export default config;
