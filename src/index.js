import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { TodoProvider } from './context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TodoProvider><App /></TodoProvider>);
