import React from 'react'
import { RecipeList } from './components/RecipeList';
//import { RecipeList } from './components/RecipeList';
import { AddRecipeForm }  from './components/AddRecipeForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RecipeDetails } from './components/RecipeDetails';
//import { AddRecipeForm } from './components/AddRecipeForm';

function App() {
  return (
    <div className="App">
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <Router>
      <div className="App">
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm />
        <Switch>
          <Route path="/" exact component={RecipeList} />
          <Route path="/recipe/:id" component={RecipeDetails} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;