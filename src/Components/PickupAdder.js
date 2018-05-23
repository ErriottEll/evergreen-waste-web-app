import React, { Component } from 'react';
import { Button, Modal, Form, Header } from 'semantic-ui-react';
// import 'react-dates/initialize';
// // import { SingleDatePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';

const pickUpOptions = [
    { key: 'yw', text: 'Yard Waste', value: 'yardwaste' },
    { key: 'r', text: 'Recycling', value: 'recycling' },
    { key: 't', text: 'Trash', value: 'trash' },
]
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
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state;
        return (
            <div>
                <Modal  trigger={<Button id='schedulerButton' fluid color='green'>Schedule a pick up</Button>}>
                    <Modal.Header>Schedule a pick up</Modal.Header>
                    <Modal.Content>
                        {/* TODO: improve form to account for special trash pickups by popping up an additional description field and some special fields for what is being picked up */}
                        <Form>
                            <Form.Select label='Pickup type' options={pickUpOptions} placeholder='Pickup type' />
                            <Form.Field>
                                <label>Date</label>
                                {/* <SingleDatePicker
                                    date={this.state.date} // momentPropTypes.momentObj or null
                                    onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                                    focused={this.state.focused} // PropTypes.bool
                                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                                /> */}
                            </Form.Field>
                            <Form.Button>Submit</Form.Button>
                        </Form>
                    </Modal.Content>
                </Modal>
                 {/* <p>{this.state.date} </p> */}
                 <p>Hello world</p>
            </div>
                )
            }
}