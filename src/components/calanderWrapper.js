import React from 'react'

import CalanderBox from './calanderBox'
export default function CalanderWrapper(){
    return(
        <div style={{border: "1px solid yellow"}}>
            <h2>Calander Wrapper Component</h2>
            <CalanderBox/>
            <CalanderBox/>
            <CalanderBox/>
            <CalanderBox/>
            <CalanderBox/>
            <CalanderBox/>
        </div>
    )
}