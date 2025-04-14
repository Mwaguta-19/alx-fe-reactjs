import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],
  setSearchTerm: (term) => set({ searchTerm: term }),

  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: get().filterRecipes(updatedRecipes, state.searchTerm),
      };
    }),
  setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      filteredRecipes: get().filterRecipes(recipes, state.searchTerm),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: get().filterRecipes(updatedRecipes, state.searchTerm),
      };
    }),
  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: get().filterRecipes(updatedRecipes, state.searchTerm),
      };
    }),
  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: get().filterRecipes(state.recipes, term),
    })),

  filterRecipes: (recipes, term) => {
    if (!term.trim()) return recipes;
    const lowerTerm = term.toLowerCase();
    return recipes.filter(
      (r) =>
        r.title.toLowerCase().includes(lowerTerm) ||
        r.ingredients?.some((ingredient) =>
          ingredient.toLowerCase().includes(lowerTerm)
        )
    );
  },
}));
