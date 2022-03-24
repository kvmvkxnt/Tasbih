import React from 'react';
import './Scss/App.scss';
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/Main/Main';
import { Provider } from './Context/Token/TokenContext';

function App() {
    return (
        <BrowserRouter>
            <Provider>
                <Main />
            </Provider>
        </BrowserRouter>
    )
}

export default App;