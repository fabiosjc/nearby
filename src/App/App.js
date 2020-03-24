import React from 'react';
import Routes from '../routes';
import { Header } from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
