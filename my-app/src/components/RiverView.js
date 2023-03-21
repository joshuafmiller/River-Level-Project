import React from "react";



const RiverCard = ({ river }) => {
//checking to see if the river is runnable, high, or low

    if (river.runnable == "runnable"){
    return (
        
    <div class="card m-2 text-center runnable" style={{ width: "18rem" }}>
      <div class="card-body">
        <h5 class="card-title">{river.name}</h5>
        <p class="card-text"></p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          {river.level}
          {river.unit}
        </li>
        <li class="list-group-item text-success">{river.runnable}</li>
        <li class="list-group-item">{river.runnableLevel[0]}-{river.runnableLevel[1]}{river.unit}</li>
      </ul>
      <div class="card-body">
        <a href={river.awpage} class="card-link">
          American Whitewater Page
        </a>
      </div>
    </div>
  );
    }
    if (river.runnable == "high"){
        return (
        
            <div class="card m-2 text-center high" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">{river.name}</h5>
                <p class="card-text"></p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  {river.level}
                  {river.unit}
                </li>
                <li class="list-group-item text-danger">{river.runnable}</li>
                <li class="list-group-item">{river.runnableLevel[0]}-{river.runnableLevel[1]}{river.unit}</li>
              </ul>
              <div class="card-body">
                <a href={river.awpage} class="card-link">
                  American Whitewater Page
                </a>
              </div>
            </div>
          );
    }

    if (river.runnable == "low"){
        return (
        
            <div class="card m-2 text-center low" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">{river.name}</h5>
                <p class="card-text"></p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  {river.level}
                  {river.unit}
                </li>
                <li class="list-group-item text-warning">{river.runnable}</li>
                <li class="list-group-item">{river.runnableLevel[0]}-{river.runnableLevel[1]}{river.unit}</li>
              </ul>
              <div class="card-body">
                <a href={river.awpage} class="card-link">
                  American Whitewater Page
                </a>
              </div>
            </div>
          );
    }

    else {
            return (
            
                <div class="card m-2 text-center" style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title">{river.name}</h5>
                    <p class="card-text"></p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      {river.level}
                      {river.unit}
                    </li>
                    <li class="list-group-item">{river.runnable}</li>
                  </ul>
                  <div class="card-body">
                    <a href={river.awpage} class="card-link">
                      American Whitewater Page8
                    </a>
                  </div>
                </div>
              );
        }
    };


const RiverView = ({ data }) => {
  const cardData = data.map((obj, i) => {
    return <RiverCard river={obj} key={i} />;
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