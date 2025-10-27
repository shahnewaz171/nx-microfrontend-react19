import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'nx-microfrontend-react19',
  remotes: [['products', 'http://localhost:4201/remoteEntry.js']],
};

export default config;
