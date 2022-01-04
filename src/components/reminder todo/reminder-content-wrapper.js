import React from 'react'

import ReminderList from './reminder-list'
import CompletedReminderList from './completed-reminder-list'
export default function ReminderContentWrapper(){
    return(
        <div >
            <h1>Reminder Content Wrapper </h1>
            <ReminderList/>
            <CompletedReminderList/>
        </div>
    )
}