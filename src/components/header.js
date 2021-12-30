import React from "react";

export default function Header(props){
    return (
        <div style={{border: "1px solid red"}}>
            <button onClick={() => props.handleMonthChange("previous")} >Previous</button>
          <h1>{props.monthName}</h1>
          <button onClick={() => props.handleMonthChange("next")} >Next</button>
        </div>
   
    )
}
