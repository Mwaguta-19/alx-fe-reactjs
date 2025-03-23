import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Simulate fetching data from data.json
    import('../data.json').then(data => {
      const recipeData = data.default.find(item => item.id === parseInt(id));
      setRecipe(recipeData);
    });
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
      <div className="shadow-lg rounded-lg overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-80 object-cover mt-4 rounded shadow-md" />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc pl-6 mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="shadow-sm rounded p-2">{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mt-4 mb-2">Instructions</h2>
        <p className="shadow-sm p-4 rounded">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;