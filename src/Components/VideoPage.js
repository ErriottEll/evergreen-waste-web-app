import React, { Component } from 'react';
import { Embed, Grid, Modal, Button, Card, Segment } from 'semantic-ui-react';

export default class VideoPage extends Component {
    render() {
        return (
            <div>
                <Grid relaxed stackable columns={1}>
                    <Grid.Column stretched>
                        <Segment color='black'>
                            <Modal trigger={<Card color='teal' header='Acrobatics/Cinematography Trailer 1' image={''} />} closeIcon closeOnDimmerClick closeOnEscape>
                                <Modal.Header>Acrobatics/Cinematography Trailer 1</Modal.Header>
                                <Modal.Content>
                                    <Embed
                                        id='YpJJMQyzgpk'
                                        placeholder={require('../assets/AquilaeTitle.png')}
                                        source='youtube'
                                    />
                                </Modal.Content>
                            </Modal>
                        </Segment>
                    </Grid.Column>

                    <Grid.Column stretched>
                        <Segment color='black'>
                            <Modal trigger={<Card color='teal' header='CSW Force 5K 2017' image={''} />} closeIcon closeOnDimmerClick closeOnEscape>
                                <Modal.Header>CSW Force 5K 2017</Modal.Header>
                                <Modal.Content>
                                    <Embed
                                        id='Wq7PrPiMTMc'
                                        placeholder={require('../assets/AquilaeTitle.png')}
                                        source='youtube'
                                    />
                                </Modal.Content>
                            </Modal>
                        </Segment>
                    </Grid.Column>

                    <Grid.Column stretched>
                        <Segment color='black'>
                            <Modal trigger={<Card color='teal' header='Project Benzene Preview 1 | CSW Official Trailer' image={''} />} closeIcon closeOnDimmerClick closeOnEscape>
                                <Modal.Header>Project Benzene Preview 1 | The Charter School of Wilmington CSW Official Trailer</Modal.Header>
                                <Modal.Content>
                                    <Embed
                                        id='ndySUJVFRWE'
                                        placeholder={require('../assets/AquilaeTitle.png')}
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
