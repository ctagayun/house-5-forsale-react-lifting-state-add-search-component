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
   const houseArray = [
    {
      id: 1,
      address: "12 Valley of Kings, Geneva",
      country: "Switzerland",
      price: 900000,
    },
    {
      id: 2,
      address: "89 Road of Forks, Bern",
      country: "Switzerland",
      price: 500000,
    },
    {
      id: 3,
      address: "1916 Rustic Oak Road",
      country: "USA",
      price: 600000,
    },
  ];
  

  /* This useState is one of the useState for Search Component
     If the App component is interested in the searchTerm state to 
     filter the stories, we will instantiate the state in the App 
     component instead of in the Search component
  */
  const [searchState, setSearchTerm] = React.useState('');

  /*  This is the callback handler for the Search component. 
   It receives the value that was passed by the Search component 
   whenever the user types something in the Search component. 
   For example when you type Tochi in the search input field 
   the target.value "Tochi" is passed to this callback handler.
     The handler then calls the state updater setSearchTerm()
   to update the searchState

   */
  const searchHandler = (event) => {
    setSearchTerm(event.target.value); //store the value in the 
                                     //state updater function - setSearchTerm.
    console.log('Value of data passed to parent component named App via  Callback Handler is = ' + event.target.value);
      };


  /* 
     1. First instantiate Search component passing the callback "handleSearch"
        as props assigned to an html attribute called "onSearch"

     2. Second we'll pass a prop to HouseList component. The variable is called 
        houseArray. When we instantiate the component it in line 94 it 
        is assigned to the "list" HTML attribute */

  return (
    <>
     <Header  headerText={welcome} />   

     <Search onSearch={searchHandler}/>  
      
     <hr/>
     <HouseList list={houseArray} /> 
    </>
  )
}

export default App
