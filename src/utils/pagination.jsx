import React, { useState, useEffect } from "react";

function Pagination() {
  // Створення стейту для збереження списку елементів та номеру поточної сторінки
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Отримання списку елементів з сервера (може бути замінено на будь-який інший спосіб отримання даних)
  useEffect(() => {
    fetch("https://example.com/items")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  // Обчислення кількості сторінок
  const pagesCount = Math.ceil(items.length / 8);

  // Обробник кліку на кнопку "Показати більше"
  const handleLoadMoreClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  // Збереження номеру поточної сторінки в local storage
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  // Отримання номеру поточної сторінки з local storage
  useEffect(() => {
    const storedPage = localStorage.getItem("currentPage");
    if (storedPage) {
      setCurrentPage(parseInt(storedPage));
    }
  }, []);

  // Отримання підсписку елементів для поточної сторінки
  const startIndex = (currentPage - 1) * 8;
  const endIndex = startIndex + 8;
  const visibleItems = items.slice(startIndex, endIndex);

  return (
    <div>
      {/* Відображення видимих елементів */}
      {visibleItems.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}

      {/* Відображення кнопки "Показати більше", якщо є наступні сторінки */}
      {currentPage < pagesCount && (
        <button onClick={handleLoadMoreClick}>Показати більше</button>
      )}
    </div>
  );
}
