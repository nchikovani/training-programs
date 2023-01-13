import React, { useEffect } from 'react';
import theme from './styles/muiTheme';
import { Button, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './stores';
import Router from './Router';
import { Api, HttpClient } from './api/api';

const App = () => {
  console.log(import.meta.env);
  const httpClient = new HttpClient<any>({
    securityWorker: (securityData) => securityData,
    baseUrl: 'http://localhost:3051/api',
  });
  const apiService = new Api(httpClient);

  useEffect(() => {
    apiService.exercise
      .exerciseControllerGetAll()
      .then((res) => res.json().then((json) => console.log(json)));
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
