import { createSelector } from "reselect";
// only return categories part of in all state
const selectCategoryReducer = (state) => state.categories;
export const selectCategories = createSelector(
  [selectCategoryReducer], // input
  (categoriesSlice) => categoriesSlice.categories // output
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    //如果categories array 不变，不运行reduce,返回原先的值
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
