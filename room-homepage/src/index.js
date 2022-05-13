import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeProvider} from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = {
    breakpoints: {
        mobile: '375px',
        desktop: '1440px'
    },
    colors: {
        darkGray: 'hsl(0, 0%, 63%)',
        black: 'hsl(0, 0%, 0%)',
        white: 'hsl(0, 0%, 100%)',
        veryDarkGray: 'hsl(0, 0%, 27%)'
    }
}
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
);
