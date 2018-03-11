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
                    <p>The Aquilae Company is an organization founded and managed by forward-thinking high school students. 
                        We emphasize quality and only deliver a product once it has surpassed our stringent standards.</p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                    What do we do?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                    <p>We use both aerial and conventional camera equipment to help create both commercial and personal videos. 
                        Aquilae also helps educate students in Delaware on everything drone related by conducting, demos, workshops, and other educational events.</p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                    Who do we make videos for?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                    <p>Our camera teams have worked with realtors, schools, and non-profit institutions. We also do projects for events such as weddings or races.</p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                    What is our typical turn around time?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 3}>
                    <p>Typically, once filming is completed, videos are edited and ready to be deployed within about 2 weeks. 
                        If we are filming a non-event based video, filming takes an average of 1-2 days. These figures will on a project-to-project basis</p>
                </Accordion.Content>
            </Accordion>
        )
    }
}