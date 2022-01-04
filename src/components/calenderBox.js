import React, {Component} from 'react'

export default class CalenderBox extends Component{
    constructor(props){
        super(props)

        const reminder = props.month ? props.month.reminders.filter(reminders => reminders.date === props.date)[0]: undefined;

        this.state = {
            reminderExists: reminder ? true : false,
            textInput: reminder ? reminder.text : ""
        }
    }

    handleSubmit(){
        if(!this.state.reminderExists && this.state.textInput != ""){
            fetch("https://api-calander-ajm.herokuapp.com/reminder/add", {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify({
                    text: this.state.textInput,
                    date: this.props.date,
                    month_id : this.props.month_id
                })
            })
            .then(response => response.json())
            .then(data => {
                if (typeof data === "string"){
                    console.log(data)
                }
                else{
                    this.setState({
                        reminderExists:true
                    })
                }
            })
        }
        else if( this.state.reminderExists && this.state.textInput != ""){
            fetch(`https://api-calander-ajm.herokuapp.com/reminder/update/${this.props.month.id}/${this.props.date}`, {
                method: "PUT",
                headers: {"content-type": "application/json"},
                body: JSON.stringify ({
                    text: this.state.textInput
                }),

            })
            .then(response => response.json())
            .then(data => {
                if (typeof data === "string"){
                    console.log(data)
    
                }
            })
        }
        else if (this.state.reminderExists && this.textInput === ""){
            fetch(`https://api-calander-ajm.herokuapp.com/reminder/delete/${this.props.reminder.id}`),{
                method:"DELETE",
            }
            this.setState ({
                reminderExists : false 
            })
        }
    }

    render(){

    return(
        <div className='calender-box'>
            <span className='date'>{this.props.date}</span>
            <textarea className='text-input'
            disabled={this.props.overflow}
            >

            </textarea>
        </div>
    )
    }
}