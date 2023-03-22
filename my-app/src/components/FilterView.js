import React from "react";


const FilterView = props => {

// let filterValue = 1;

// const ChangeButton = (value) =>{
//     filterValue= value
//     console.log(filterValue)
// }


  return (
    <div class= "text-center">
    <h3>Filter By:</h3>
    <button  type="button" onClick={() => props.button(1)} class="btn btn-secondary btn-lg" style={{width: "110px"}}>All</button>
    <button  type="button" onClick={() => props.button(2)}class="btn btn-primary btn-lg" style={{width: "110px"}}>Low</button>
    <button  type="button" onClick={() => props.button(3)}class="btn btn-success btn-lg"style={{width: "110px"}}>Runnable</button>
    <button  type="button" onClick={() => props.button(4)} class="btn btn-danger btn-lg"style={{width: "110px"}}>High</button>
    </div>
  );
};

export default FilterView;
