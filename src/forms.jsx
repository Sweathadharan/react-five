import React from "react";
import "./forms.css";
  
const ToggleSwitch = ({ label }) => {
  return (
    <>
    <h2>FAB CAFE</h2>
    <center>
    <div className="pic">
            <img src="https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/gettyimages-sharing-food.jpg?itok=o_y4Rbqy"/>
            <ul>
                <li>DID YOU LIKE OUR HOTEL TASTE?</li>
                <li>WHAT IS YOUR FAVOUTITE FOOD IN OUR CAFE?</li>
                <li>DO YOU LIKE THE AMBIENCE HERE?</li>
                
            </ul>

     

    <div className="container">
      {label}{" "}
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" 
               name={label} id={label} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
              </div>
    </div>
    </div>
    
    </center>
</>
  );
};
  
export default ToggleSwitch;
