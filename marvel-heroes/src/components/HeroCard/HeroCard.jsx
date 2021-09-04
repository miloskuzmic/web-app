import React from 'react';

export const HeroCard = () => {  
 let style1 = {width: '18 rem'}
  return (  
  
    <div className="card " style={style1}> 
      {/* <img src="..." class="card-img-top" alt="..."/> */}
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text text-primary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
    </div> )
}