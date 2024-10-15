import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Navpar from './components/Navpar';
import Header from './components/Header';
import Category from './components/Category';
import CardList from './components/CardList';
import { FoodList } from './components/Food';

function App() {
  const [foods, setFoods] = useState(FoodList);
const allCategories = ["الكل", ...new Set(FoodList.map((food) => food.Category))]
  // فلترة حسب الفئة
  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setFoods(FoodList); // إعادة جميع الأصناف
    } else {
      const newFoods = FoodList.filter((food) => food.Category === cat);
      setFoods(newFoods);
    }
  };
  // فلترة حسب البحث
  const filterBySearch = (word) => {
    if (word !== "") {
      const newFoods = FoodList.filter((food) => food.title.includes(word));
      setFoods(newFoods);
    }
  };

  return (
    <div>
      <Navpar filterBySearch={filterBySearch} />
      <Container>
        <Header />
        <Category filterByCategory={filterByCategory} allCategories={allCategories} />
        <CardList foods={foods} />
      </Container>
    </div>
  );
}

export default App;
