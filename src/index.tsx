import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/index.css';
import './styles/App.css';
import './styles/CardList.css';
import './styles/PokemonDetails.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
