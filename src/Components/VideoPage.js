import React, { Component } from 'react';
import { Embed, Grid, Modal, Button, Card, Segment } from 'semantic-ui-react';

export default class VideoPage extends Component {
    render() {
        return (
            <div>
                <Grid relaxed stackable columns={3}>
                    <Grid.Column>
                        <Segment color='black'>
                            <Modal trigger={<Card fluid color='teal' header='Something' image={require('../assets/reclogo.png')} />} closeIcon closeOnDimmerClick closeOnEscape>
                                <Modal.Header>Something</Modal.Header>
                                <Modal.Content>
                                    <Embed
                                        id=''
                                        placeholder={require('../assets/reclogo.png')}
                                        source='youtube'
                                    />
                                </Modal.Content>
                            </Modal>
                        </Segment>
                    </Grid.Column>

                </Grid>
            </div>
        )
    }
}
