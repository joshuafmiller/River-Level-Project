import React from "react";


const FilterView = () => {


  return (
    <div class= "text-center">
    <h3>Filter By:</h3>
    <button  type="button" class="btn btn-secondary btn-lg" style={{width: "110px"}}>All</button>
    <button  type="button" class="btn btn-warning btn-lg" style={{width: "110px"}}>Low</button>
    <button  type="button" class="btn btn-success btn-lg"style={{width: "110px"}}>Runnable</button>
    <button  type="button" class="btn btn-danger btn-lg"style={{width: "110px"}}>High</button>
    </div>
  );
};

export default FilterView;
