import React from 'react'

import CalenderWrapper from './calenderWrapper'
export default function ContentWrapper(props){
    return(
        <div style={{border: "3px solid green"}}>
            <h1>Content Wrapper Component </h1>
            <CalenderWrapper month={props.month} />
        </div>
    )
}