import React from 'react'

import CalenderBox from './calenderBox'
import DayOfWeek from './dayOfWeek'

export default function CalenderWrapper(props){
    const renderCalenderBoxes = () =>{
        const calenderBoxesArray=[];
        for(let i=1; i<= props.month.start_day; i++){
            calenderBoxesArray.push(
                <CalenderBox/>
            )
        }
        for(let i=1; i<= props.month.days_in_month; i++){
            calenderBoxesArray.push(
                <CalenderBox/>
            )
        }
        for(let i=1; 42 - props.month.days_in_month - props.month.start_day; i++){
            calenderBoxesArray.push(
                <CalenderBox/>
            )
        }

    return  calenderBoxesArray;
    };


    return(
        <div style={{border: "3px solid yellow"}}>
            <DayOfWeek day="Sunday" />
            <DayOfWeek day="Monday" />
            <DayOfWeek day="Tuesday" />
            <DayOfWeek day="Wednesday" />
            <DayOfWeek day="Thursday" />
            <DayOfWeek day="Friday" />
            <DayOfWeek day="Saturday" />
           {renderCalenderBoxes()}
        </div>
    )
}