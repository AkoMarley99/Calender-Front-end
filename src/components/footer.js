import React from "react";

export default function Footer(props){
    return (
        <div className="footer-wrapper">
            <div className="year">{props.monthYear}</div>
        </div>

    )
}
