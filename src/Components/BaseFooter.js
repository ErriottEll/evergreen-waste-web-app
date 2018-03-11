import React, { Component } from 'react';
import { Segment, Container, Header, Grid, Icon } from 'semantic-ui-react';

export default class BaseFooter extends Component {
    render() {
        return (
            <Segment inverted>
                <Container fluid textAlign='center' className='footer-content'>
                    <Header as='h3' inverted>Contact Information</Header>
                    <Grid columns={2} centered>
                        <Grid.Row>
                            <div><Icon name='mail' />Email: <a href="mailto:aquilaecompany@gmail.com">aquilaecompany@gmail.com</a></div>
                        </Grid.Row>
                        <Grid.Row>
                            <div><Icon name='instagram' />Instagram Account: <a href="https://www.instagram.com/aquilae.co">Aquilae co.</a></div>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        )
    }
}