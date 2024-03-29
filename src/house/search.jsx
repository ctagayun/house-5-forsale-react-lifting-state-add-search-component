import * as React from 'react';
import HouseRow from './houserow';
  /*
     This component will use the stateful searchStateFulVar from the 
   search component to filter the houseArray by their "country"
   property in the App component before they are passed as 
   props to the HouseList component
  */

  //There is a callback function in the App component called "searchHandler". 
  //This handler is passed as prop to SearchComponent when it is instantiated
  //in App component. The useState for this component is defined in App as well.
  //It looks like this:
  // const [searchTerm, setSearchTerm] = React.useState('');
  const Search = (props) => {   
        
    console.log('Search box is rendered. When you start typing on the search box' +
      ' only this component will render. App component will no longer render.')
      
    //Note: onChange={props.onSearch} now has the value "searchHandler"
    //because it was passed as props and assigned to an HTML attribute 
    //called "onSearch" when Search component was instantiated in App
    return(
    <div className="float-start ">
        <label htmlFor="search">Search:</label>
        <input id="search" 
          value={props.search}
          type="text"
          onChange={props.onSearch}/> 
        <p> 
          Searching for <strong>{props.search}</strong>
         </p>
     </div>
    )
  };
  

export default Search;