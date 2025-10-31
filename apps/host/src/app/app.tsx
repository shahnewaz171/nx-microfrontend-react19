// Uncomment this line to use CSS modules
// import styles from './app.module.css';

import { lazy, Suspense } from 'react';
import { loadRemote } from '@module-federation/enhanced/runtime';

const RemoteButton = lazy(() =>
  loadRemote<{ default: React.ComponentType }>('products/RemoteButton').then(
    (module) => module || { default: () => null }
  )
);

export function App() {
  return (
    <div>
      <p>Hi, I'm the host</p>
      <Suspense fallback="Loading Remote Button...">
        <RemoteButton />
      </Suspense>
    </div>
  );
}

export default App;
