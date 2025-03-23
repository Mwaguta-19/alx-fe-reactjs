import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    import('../data.json').then(data => {
      const recipeData = data.default.find(item => item.id === parseInt(id));
      setRecipe(recipeData);
    });
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-80 object-cover mt-4 rounded" />
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Ingredients</h2>
        <p>{recipe.summary}</p>
        <h2 className="text-xl font-semibold mt-4">Instructions</h2>
        <p>{recipe.instructions || "No instructions available"}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;