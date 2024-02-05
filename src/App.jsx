/*
  Tasks:
    - create a search component
    - add code to display only the houses based on the search
      result.
    - add instantiation of Search component in App.jsx
  Previous Task:
     - Create HouseList component
     - see discussion about React state in HouseList component.

  Previous Task:
  Setup: 
    npm install bootstrap
    Once the installation is complete, we can include it in our app’s 
    entry file in main.jsx :
    --  Bootstrap CSS
    import "bootstrap/dist/css/bootstrap.min.css";
    -- Bootstrap Bundle JS
    import "bootstrap/dist/js/bootstrap.bundle.min";

    Now since we created the project with Vite, we can rely 
    on Vite's plugins to integrate ESLint properly. Run the 
    following command
       npm install vite-plugin-eslint --save-dev
    */


import * as React from 'react';
import './App.css'
import Header from "./header";
import HouseList from './house/houseList';
import Search from './house/search';

const App = () => {

   const welcome = {
     subject: 'List of',
     title: 'Houses for Sale',
   };

   //Will move the houseArray from global scope into App Component
   const housearray = [
    {
      id: 1,
      address: "12 Valley of Kings, Geneva",
      country: "Switzerland",
      price: 900000,
    },
    {
      id: 2,
      address: "89 Road of Forks, Bern",
      country: "Italy",
      price: 500000,
    },
    {
      id: 3,
      address: "1916 Rustic Oak Road",
      country: "USA",
      price: 600000,
    },
  ];
  
  console.log('A- App component is rendered. This renders only on first rendering of the App')

  /* useState
     This useState is one of the useState for Search Component
     If the App component is interested in the searchTerm state to 
     filter the stories, we will instantiate the state in the App 
     component instead of in the Search component
  */
  const [stateOfSearchComponent, setSearchTerm] = React.useState('USA');

  /*  callback handler
   This is the callback handler for the Search component. 
   It receives the value that was passed by the Search component 
   whenever the user types something in the Search component. 
   For example when you type Tochi in the search input field 
   the target.value "Tochi" is passed to this callback handler.
     The handler then calls the state updater setSearchTerm()
   to update the searchState
   */
  const searchHandler = (event) => {
    setSearchTerm(event.target.value); //tell the state updater function
                                       //setSearchTerm to update the stateOfSearchComponent.
      console.log('B - Value of data passed to parent component named App via ' +
         'Callback Handler is = ' + event.target.value);
      };

   //Add this function to filter the housearray before it is passed to
   //HouseList component
  
   //select the record from the list based on the filter
   //Here, the JavaScript array's built-in filter method is used 
   //to create a new filtered array. The filter() method takes a function 
   //as an argument, which accesses each item in the array and returns /
   //true or false. If the function returns true, meaning the condition is 
   //met, the item stays in the newly created array; if the function 
   //returns false, it's removed from the filtered array.

   const searchedHouses = housearray.filter((house) =>
      //convert  to lowercase the filtered copy of HouseArray called "house" 
      house.country.toLowerCase().includes(stateOfSearchComponent.toLowerCase()) 
     );  

    const myHouseStateAfterSearch = JSON.stringify(searchedHouses);
    console.log(" C - Value of searchedHouses= " + myHouseStateAfterSearch);

    //pass searchHandler as props but first assign it to HTML attribute called onSearch
    //pass the searchedHouses to HouseList
  return (
    <>
     <Header  headerText={welcome} />   

     <Search search={stateOfSearchComponent} onSearch={searchHandler}/>  
      
     <hr/>
     <HouseList list={searchedHouses} /> 
    </>
  )
}

export default App
