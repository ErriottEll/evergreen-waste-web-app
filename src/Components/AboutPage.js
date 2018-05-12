import React, { Component } from 'react';
import { Header, Container, Divider } from 'semantic-ui-react';

import AccordionAbout from './AccordionAbout.js';

export default class AboutPage extends Component {
    render() {
        return (
            <div>
                <Container text>
                    <Header as='h1'>About Evergreen</Header>
                    <p>
                        EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEeeeeeeeee eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
                        EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEe
                    </p>
                    <AccordionAbout />
                </Container>
            </div>
        )
    }
}