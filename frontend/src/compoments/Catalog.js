import React, { useState, useEffect } from 'react';

// Компонент каталога товаров
function Catalog() {
  const [products, setProducts] = useState([]);

  // Загрузка товаров с бэкенда (пока заглушка)
  useEffect(() => {
    // Пример данных (в реальном проекте делаем запрос к API)
    const mockProducts = [
      { id: 1, name: 'Умный датчик протечки', price: 2990, description: 'Обнаруживает утечки воды' },
      { id: 2, name: 'Умная розетка', price: 1990, description: 'Контролирует энергопотребление' },
    ];
    setProducts(mockProducts);
  }, []);

  return (
    <div>
      <h2>Каталог товаров</h2>
      {products.map(product => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Цена: {product.price} ₽</p>
          <button>Добавить в корзину</button>
        </div>
      ))}
    </div>
  );
}

export default Catalog;