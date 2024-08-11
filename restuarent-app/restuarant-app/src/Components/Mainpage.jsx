import React from 'react';
import { useState } from 'react';
import Mealcards from './Mealcards';


const Mainpage = () => {
  const[search,setSearch] = useState()
  const[data,setData] = useState() 

  const handleInput = (e) => {
    setSearch(e.target.value); // Updating state with input value
  }
  // Function to fetch data from API and update state when button is clicked
  const myFun = async () => {
    // Fetching data from API
    const get = await fetch(
      `http://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
    );
    const jsonData = await get.json();
    setData(jsonData.meals); // Setting state with fetched data
    //console.log(jsonData);
  };
  return (
    <>
    <div className='container'>
      <div className='searchbar'>
        <input type="text" placeholder='Enter Dishes'  onChange={handleInput}/>
        <button id = "searchButton" onClick={myFun}>Search</button>
      </div>
      <div>
        <Mealcards detail={data}/>
      </div>
    </div>
    </>
  )
}

export default Mainpage