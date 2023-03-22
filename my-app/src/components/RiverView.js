import React from "react";



const RiverCard = ({ river, button }) => {
//checking to see if the river is runnable, high, or low

    if ((river.runnable == "runnable" && button==3) || (river.runnable == "runnable" && button==1)){
    return (
      
    <div class="card m-2 text-center runnable" style={{ width: "18rem", }}>
      <div class="card-body">
        <h5 class="card-title fw-bolder">{river.name}</h5>
        <p class="card-text"></p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item fw-bolder">
          {river.level}
          {river.unit}
        </li>
        <li class="list-group-item text-success fw-bolder">{river.runnable}</li>
        <li class="list-group-item fw-bolder">{river.runnableLevel[0]}-{river.runnableLevel[1]}{river.unit}</li>
      </ul>
      <div class="card-body">
        <a href={river.awpage} class="card-link">
          American Whitewater Page
        </a>
      </div>
    </div>
  );
    }
    if ((river.runnable == "high" && button==4) || (river.runnable == "high" && button==1)){
        return (
        
            <div class="card m-2 text-center high" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title fw-bolder">{river.name}</h5>
                <p class="card-text"></p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item fw-bolder">
                  {river.level}
                  {river.unit}
                </li>
                <li class="list-group-item text-danger fw-bolder">{river.runnable}</li>
                <li class="list-group-item fw-bolder">{river.runnableLevel[0]}-{river.runnableLevel[1]}{river.unit}</li>
              </ul>
              <div class="card-body">
                <a href={river.awpage} class="card-link">
                  American Whitewater Page
                </a>
              </div>
            </div>
          );
    }

    if ((river.runnable == "low" && button==2)||(river.runnable == "low" && button==1)){
        return (
        
            <div class="card m-2 text-center low" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title fw-bolder">{river.name}</h5>
                <p class="card-text"></p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item fw-bolder">
                  {river.level}
                  {river.unit}
                </li>
                <li class="list-group-item text-primary fw-bolder">{river.runnable}</li>
                <li class="list-group-item fw-bolder">{river.runnableLevel[0]}-{river.runnableLevel[1]}{river.unit}</li>
              </ul>
              <div class="card-body">
                <a href={river.awpage} class="card-link">
                  American Whitewater Page
                </a>
              </div>
            </div>
          );
    }

    // else {
    //         return (
            
    //             <div class="card m-2 text-center" style={{ width: "18rem" }}>
    //               <div class="card-body">
    //                 <h5 class="card-title">{river.name}</h5>
    //                 <p class="card-text"></p>
    //               </div>
    //               <ul class="list-group list-group-flush">
    //                 <li class="list-group-item">
    //                   {river.level}
    //                   {river.unit}
    //                 </li>
    //                 <li class="list-group-item">{river.runnable}</li>
    //               </ul>
    //               <div class="card-body">
    //                 <a href={river.awpage} class="card-link">
    //                   American Whitewater Page8
    //                 </a>
    //               </div>
    //             </div>
    //           );
    //     }
    };


const RiverView = ({ data, button }) => {
  const cardData = data.map((obj, i) => {
    return <RiverCard river={obj} key={i} button={button} />;
  });
  return (
    <div>
      {cardData && (
        <div className="container">
          <div className="row">{cardData}</div>
        </div>
      )}
    </div>
  );
};

export default RiverView;