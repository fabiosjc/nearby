import React from 'react';
import Routes from '../routes';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';

function App() {
  return (
    <ThemeProvider className="App" theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
