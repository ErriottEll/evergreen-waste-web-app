import React, { Component } from 'react';
import { Button, Modal, Form, Header } from 'semantic-ui-react';
import axios from 'axios';
// import 'react-dates/initialize';
// // import { SingleDatePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';

const pickUpOptions = [
    { key: 'yw', text: 'Yard Waste', value: 'yardwaste' },
    { key: 'r', text: 'Recycling', value: 'recycling' },
    { key: 't', text: 'Trash', value: 'trash' },
]

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}
// Temp fix for the modal that's broken in the version of SUIR I'm running https://github.com/Semantic-Org/Semantic-UI-React/issues/2558
// const inlineStyle = {
//     modal: {
//         marginTop: '0px !important',
//         marginLeft: 'auto',
//         marginRight: 'auto'
//     }
// };
// {/*style={inlineStyle.modal}*/}
export default class PickupAdder extends Component {
    state = {
        title: '',
        allDay: 'true',
        startDate: '',
        endDate: '',
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { title, startDate, endDate } = this.state;
        this.setState({ title: title, startDate: startDate, endDate: endDate });
        console.log(this.state)
        //axios post
        //Currently all events are allDay: true
        const myEvent = {
            title: this.state.title,
            allDay: 'true',
            startDate: this.state.startDate,
            endDate: this.state.endDate,
        };

        axios.post('http://localhost:8080/events', { myEvent }, headers)
        .then( res => {
            console.log(res);
            console.log(res.data);
        })
    }

    render() {
        const { title, startDate, endDate } = this.state;
        return (
            <div>
                <Modal trigger={<Button id='schedulerButton' fluid color='green'>Schedule a pick up</Button>}>
                    <Modal.Header>Schedule a pick up</Modal.Header>
                    <Modal.Content>
                        {/* TODO: improve form to account for special trash pickups by popping up an additional description field and some special fields for what is being picked up */}
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Select label='Pickup type' options={pickUpOptions} placeholder='Pickup type' name='title' onChange={this.handleChange} value={this.title} />
                            <Form.Input label='Start Date' placeholder='5/23/2018' name='startDate' onChange={this.handleChange} value={this.startDate} />
                            <Form.Input label='End Date' placeholder='5/24/2018' name='endDate' onChange={this.handleChange} value={this.endDate} />
                            {/* <Form.Field>
                                <label>Date</label>
                                <SingleDatePicker
                                    date={this.state.date} // momentPropTypes.momentObj or null
                                    onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                                    focused={this.state.focused} // PropTypes.bool
                                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                                />
                            </Form.Field> */}
                            <Form.Button>Submit</Form.Button>
                        </Form>
                    </Modal.Content>
                </Modal>
                {/* <p>{this.state.date} </p> */}
                <p>Hello world</p>
            </div >
        )
    }
}