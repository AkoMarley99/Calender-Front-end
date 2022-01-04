import React from "react";

export default function Header(props){
    return (
        <div className="header-wrapper">
            
            <button className="btn" onClick={() => props.handleMonthChange("previous")} >Previous</button>
            
            <div className="month-text">
                {props.monthName}
            </div>

          <button  className="btn" onClick={() => props.handleMonthChange("next")} >Next</button>
        
        </div>
   
    )
}
