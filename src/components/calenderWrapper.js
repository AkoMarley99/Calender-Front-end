import React from 'react'

import CalenderBox from './calenderBox'
import DayOfWeek from './dayOfWeek'

export default function CalenderWrapper(props){
    const renderCalenderBoxes = () =>{
        const calenderBoxesArray=[];
        for(let i=1; i<= props.month.start_day; i++){
            const date = props.month.days_in_previous_month - props.month.start_day + i
            calenderBoxesArray.push(
                <CalenderBox key={`P-${i}`} date ={date}  overflow/>
            )
        }
        for(let i=1; i<= props.month.days_in_month; i++){
            calenderBoxesArray.push(
                <CalenderBox key={`${props.month.id}-${i}`} date ={i} month = {props.month} />
            )
        }
        for(let i=1;  i <= 42 - props.month.days_in_month - props.month.start_day; i++){
            calenderBoxesArray.push(
                <CalenderBox key={`N-${i}`} date ={i} overflow/>
            )
        }

    return  calenderBoxesArray;
    };


    return(
        <div className='calender-wrapper'>
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