import { ModuleFederationConfig } from '@nx/module-federation';

const sharedLibraries = ['react', 'react-dom', 'react-router-dom'];

const config: ModuleFederationConfig = {
  name: 'products',
  exposes: {
    './RemoteButton': './src/components/remote-button.tsx',
  },
  shared: (libraryName, sharedConfig) => {
    if (!sharedLibraries.includes(libraryName)) {
      return false;
    }
  },
};

export default config;
