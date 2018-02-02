import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

export default class AccordionExampleStyled extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        return (
            <Accordion styled>
                <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                    Who are we?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <p>Hello!</p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                    What do we do?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                    <p>Hello!</p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                    Some other question?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                    <p>Hello!</p>
                </Accordion.Content>
            </Accordion>
        )
    }
}