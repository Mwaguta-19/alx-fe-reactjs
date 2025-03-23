import React, { useState , useEffect} from 'react'
import data from "../data.json";
import { Link } from 'react-router-dom';


export default function HomePage() {

    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        // Set the mock data to the state (usually, you'd fetch data from an API)
        console.log(data);
        setRecipe(data);
      }, []);

  return (
    <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipe.map((recipe) => (
        <div
          key={recipe.id}
          className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-300 ease-in-out hover:scale-105"
        >
          <img className="w-full" src={recipe.image} alt={recipe.title} />
          <div className="px-6 py-4">
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p className="text-gray-700 text-base">{recipe.summary}</p>
          </div>
          <div className="px-6 py-4">
            <Link to={`/recipe/${recipe.id}`}className="text-blue-500 hover:underline">View Recipe</Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
