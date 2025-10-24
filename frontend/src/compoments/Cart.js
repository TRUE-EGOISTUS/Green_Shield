import React, { useState } from 'react';

// Компонент корзины
function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Функция для добавления в корзину (пока заглушка)
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} - {item.price} ₽</li>
          ))}
        </ul>
      )}
      <button>Оформить заказ</button>
    </div>
  );
}

export default Cart;