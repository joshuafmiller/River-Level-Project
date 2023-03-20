import React from "react";

const RiverCard = ({river}) => {

  return (
    <div class="card" style={{width: '18rem'}}>
      <div class="card-body">
        <h5 class="card-title">{river.name}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">
          Card link
        </a>
        <a href="#" class="card-link">
          Another link
        </a>
      </div>
    </div>
  );
};

const RiverView = ({data}) => {

    // data.map((data, i) => {
    //     return <RiverCard data={data} i={i} />
    // })
//         for (let i = 0; i < data.length; i++ ){
//             console.log(data[i].ID)
//         return <RiverCard data={data} i={i}/>
//     }
// }


    const resultsHtml = data.map((obj, i) => {
        return <RiverCard river={obj} key={i} />
})

        // var newData = data.map(function(element) {
        //     return <RiverCard data={obj} i={i}/>
        // })

        // data.forEach((data, i) => {
        //     console.log(data, i)
        //     return <RiverCard data={data} i={i}/>
        // });
        return (
            <div>
                {resultsHtml &&
                    <div className='container'>
                        <div className="row">
                            {resultsHtml}
                        </div>
                    </div>
                }
            </div>
        )
}


export default RiverView;
