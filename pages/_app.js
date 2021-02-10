import React from 'react';
import { Provider } from 'react-redux';
import { useStore } from '../Redux/store';
import Layout from '@components/Layout/Layout';
import 'semantic-ui-css/semantic.min.css';

export function reportWebVitals(metric) {
  console.log(metric);
}

export default function MyApp ({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};