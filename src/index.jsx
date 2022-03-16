import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider as HamdProvider } from './Context/HamdContext';
import { Provider as IstiforProvider } from './Context/IstigforContext';
import { Provider as SalovatProvider } from './Context/SalovatContext';

ReactDOM.render(
    <React.StrictMode>
        <SalovatProvider>
            <IstiforProvider>
                <HamdProvider>
                    <App />
                </HamdProvider>
            </IstiforProvider>
        </SalovatProvider>
    </React.StrictMode>,
    document.getElementById('root')
);