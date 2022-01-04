import React, {Component} from "react";

import ReminderHeader from "./reminder-header";
import ReminderFooter from "./reminder-footer";
import ReminderContentWrapper from "./reminder-content-wrapper";

export default class Reminder extends Component() {
    constructor(){
        super();

        
        this.state = {
           date: {}

    }
    
    selectDate(){
        this.setState({
            date: 
        })
    }
    

    render(){
    return(
        <div>
            <ReminderHeader />
            <ReminderContentWrapper/>
            <ReminderFooter/>
        </div>
    )
}
}