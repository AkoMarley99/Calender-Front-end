import React from 'react'

import CalenderWrapper from './calenderWrapper'
export default function ContentWrapper(props){
    return(
        <div className='content-wrapper'>
            <CalenderWrapper month={props.month} />
        </div>
    )
}