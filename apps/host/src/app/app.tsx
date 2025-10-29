// Uncomment this line to use CSS modules
// import styles from './app.module.css';

// @ts-expect-error
import RemoteButton from 'products/RemoteButton';

export function App() {
  return (
    <div>
      <p>Hi, I'm the host</p>
      <RemoteButton />
    </div>
  );
}

export default App;
