import React from "react";

export default function Header(props){
    return (
        <div className="header-wrapper">
            
            <button className="btn" onClick={() => props.handleMonthChange("previous")} >{props.newMonthName("previous")}</button>
            
            <div className="month-text">
                {props.monthName}
            </div>

          <button  className="btn" onClick={() => props.handleMonthChange("next")}>{props.newMonthName("next")}</button>
        
        </div>
   
    )
}
