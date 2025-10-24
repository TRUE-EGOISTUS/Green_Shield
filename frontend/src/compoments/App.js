import React from 'react';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import './index.css';

// Главный компонент приложения
function App() {
  return (
    <div className="app">
      <h1>Зелёный Щит</h1>
      <p>Умные системы для экономии воды и электричества</p>
      <Catalog /> {/* Компонент каталога товаров */}
      <Cart />   {/* Компонент корзины */}
    </div>
  );
}

export default App;