import React from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealList from "../components/MealList";

const CategoriesMealScreen = props => {
  const categoryId = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(meal =>
    meal.categoryIds.includes(categoryId)
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoriesMealScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(
    category => category.id === categoryId
  );

  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoriesMealScreen;
