"use client";
import { useState, useEffect } from "react";


//Function to fetch a list of meal ideas based on the ingredient, asynchronous programming allows a unit of work to run separately from the main application thread.
const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`); //fetch makes a GET request to the madlab API that includes the specified ingredient
  const data = await response.json(); //The response is converted to JSON format, await to wait for the asynchronous operation to complete
  return data.meals || []; //Return the meals data or an empty array if no meals are found
};

const fetchMealDetails = async (mealId) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  const data = await response.json();
  return data.meals ? data.meals[0] : null; //Return the meals data or null if no meals are found
};

export default function MealIdeas({ ingredient }) { //Function to display meal ideas which takes in the ingredient as a prop
  const [meals, setMeals] = useState([]); //State to store the list of meal ideas
  const [mealDetails, setMealDetails] = useState(null); //State to store the details of a selected meal
  const [selectedMealId, setSelectedMealId] = useState(null); // State to store the ID of the selected meal

  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient); //Function that helps to fetch the meal ideas based on the ingredient provided and update the meals state
    setMeals(fetchedMeals);
  };

  useEffect(() => {
    if (ingredient) { //LoadmealIdead function is called only if the ingredient is provided
      loadMealIdeas(); //Function to load meal ideas when the ingredient prop changes 
    }
  }, [ingredient]); //Dependency array to trigger the useeffect only when the ingredient prop changes

  const handleMealClick = async (mealId) => { //handlemealclick is only called when a meal item is clicked
    setSelectedMealId(mealId); // updates the selected meal ID to the clicked meal ID
    const details = await fetchMealDetails(mealId);
    setMealDetails(details); // Fetches detailed information for that meal using fetchMealDetails and updates the mealDetails state, making it available for rendering.
  };

  return (
    <div className="flex-1 max-w-sm m-2">
      <h3 className="text-xl font-bold text-white">Meal Ideas:</h3>
      <div>
        {meals.length > 0 ? ( //Conditional rendering to display meal ideas based on the ingredient
          <>
            <h1 className="text-white">Here are some meal ideas using {ingredient} :</h1>
            {meals.map((meal) => ( //Map through the meals array to display each meal idea
              <div 
                key={meal.idMeal} //Ensures each item has a unique key to help React track and manage the list. 
                className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer"
                onClick={() => handleMealClick(meal.idMeal)} // Calls the handleMealClick function when a meal item is clicked,Passing this ID allows the handleMealClick function to know which specific meal the user clicked on.
              >
                <h2 className="text-white">{meal.strMeal}</h2>
                
                {mealDetails && selectedMealId === meal.idMeal && ( //Checks if mealDetails are available and if the selectedMealId matches the meal.idMeal. This ensures only the selected meal’s details are shown.
                  <div className="rounded">
                    <h1 className="text-xs ml-6 text-gray-400">Ingredients needed:</h1>
                    <ul>
                      {Array.from({ length: 20 }).map((_, index) => { //
                        const ingredient = mealDetails[`strIngredient${index + 1}`];
                        const measure = mealDetails[`strMeasure${index + 1}`];
                        return ingredient ? (
                          <li key={index} className="text-xs ml-6 text-gray-400">
                            {`${ingredient} (${measure})`}
                          </li>
                        ) : null;
                      })}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </>
        ) : (
          <p className="text-white">No meal ideas found for this ingredient.</p>
        )}
      </div>
    </div>
  );
}