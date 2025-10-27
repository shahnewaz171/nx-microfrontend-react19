import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: '@nx-microfrontend-react19/products',
  exposes: {
    './RemoteButton': './src/components/remote-button.tsx',
  },
};

export default config;
