import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const formErrors = {};
    if (!title) formErrors.title = 'Title is required';
    if (!ingredients) formErrors.ingredients = 'Ingredients are required';
    if (!steps) formErrors.steps = 'Preparation steps are required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      // Handle form submission (e.g., save data)
      alert('Recipe submitted!');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto shadow-lg rounded-lg bg-white">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg p-2 shadow-sm"
            placeholder="Recipe Title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-sm font-medium mb-2">Ingredients</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border rounded-lg p-2 shadow-sm"
            placeholder="Ingredients"
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="steps" className="block text-sm font-medium mb-2">Preparation Steps</label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border rounded-lg p-2 shadow-sm"
            placeholder="Preparation Steps"
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;