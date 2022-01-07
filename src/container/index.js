import React, { Suspense } from 'react';
import axios from 'axios';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from 'react-router-dom';
import store, { persistor } from '../store';
import Routes from './routes';
import ScrollToTop from '../components/common/scroll';
import { setupAxios } from '../utils';
const { PUBLIC_URL } = process.env;

setupAxios(axios, store);

const AppContainer = () => (
    <Provider store={store} loading={null}>
        <PersistGate persistor={persistor} loading={null}>
            <Suspense fallback={null}>
                <BrowserRouter basename={PUBLIC_URL}>
                    <ScrollToTop>
                        <Routes />
                    </ScrollToTop>
                </BrowserRouter>
            </Suspense>
        </PersistGate>
    </Provider>
)

export default AppContainer;