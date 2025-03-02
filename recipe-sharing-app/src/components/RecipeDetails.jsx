import React from 'react';
import { useRecipeStore } from '../recipeStore';
import { useNavigate } from 'react-router-dom';
import { EditRecipeForm } from './EditRecipeForm';
import { DeleteRecipeButton } from './DeleteRecipeButton';

const RecipeDetails = ({ match }) => {
  const { id } = match.params;  // Retrieve the recipe ID from the URL
  const recipe = useRecipeStore(state => state.recipes.find(recipe => recipe.id === parseInt(id)));

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Render Edit and Delete components */}
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export { RecipeDetails };