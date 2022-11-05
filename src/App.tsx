import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { theme } from './config/theme';
import Routes from './routes';
import { meuPersistor, minhaStore } from './store';

const App: React.FC = () => {
  return (
      <Provider store={minhaStore}>
        <PersistGate persistor={meuPersistor}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes />
          </ThemeProvider>
        </PersistGate>
      </Provider>
  );
}

export default App;
