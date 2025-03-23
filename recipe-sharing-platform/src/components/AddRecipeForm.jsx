// AddRecipeForm.jsx
import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  // Validate function to check all fields
  const validate = () => {
    const formErrors = {};
    if (!title) formErrors.title = 'Title is required';
    if (!ingredients) formErrors.ingredients = 'Ingredients are required';
    else if (ingredients.split('\n').length < 2) formErrors.ingredients = 'Please add at least two ingredients';

    if (!steps) formErrors.steps = 'Preparation steps are required';
    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation before submission
    const formErrors = validate();
    
    if (Object.keys(formErrors).length === 0) {
      // Proceed with form submission (you can handle API calls here)
      console.log('New recipe submitted:', { title, ingredients, steps });
      // Reset form after successful submission
      setTitle('');
      setIngredients('');
      setSteps('');
    } else {
      // If there are errors, set the error state
      setErrors(formErrors);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div className="flex flex-col">
          <label htmlFor="title" className="text-lg font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-2">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div className="flex flex-col">
          <label htmlFor="ingredients" className="text-lg font-medium mb-2">Ingredients</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
            rows="4"
            placeholder="Enter ingredients (one per line)"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-2">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps */}
        <div className="flex flex-col">
          <label htmlFor="steps" className="text-lg font-medium mb-2">Preparation Steps</label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
            rows="4"
            placeholder="Enter preparation steps"
          />
          {errors.steps && <p className="text-red-500 text-sm mt-2">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipeForm;
