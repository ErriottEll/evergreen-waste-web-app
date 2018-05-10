import React, { Component } from 'react';
import { Header, Image, Button, Icon, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../index.css';

export default class HomePage extends Component {
    render() {
        return (
            <div>
            <div className="landing-page-background">
                <Header as='h1' icon textAlign='center'>
                    <div className="landing-page-background-specific" />
                    <Image src={require('../assets/reclogo.png')} circular />
                    <Header.Content className='landing-title-text'>
                        Evergreen Waste Services
                    </Header.Content>
                    <Header as='h3' textAlign='center'><em>"EEEEEEEEEEEE"</em></Header>
                    <p className='landing-paragraph'>EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</p>
                    <Button.Group className="mrg">
                        <Button animated color='grey' as={Link} to='/about'>
                            <Button.Content visible>Read more</Button.Content>
                            <Button.Content hidden>
                                {/* <Icon circular name='newspaper' /> */}
                                About page
                            </Button.Content>
                        </Button>
                        <Button.Or/>
                        
                        <Button animated color='black' as={Link} to='/videos'>
                            <Button.Content visible>Watch more</Button.Content>
                            <Button.Content hidden>
                                {/* <Icon name='video' size='mini' /> */}
                                Video bank
                            </Button.Content>
                        </Button>
                    </Button.Group>
                </Header>
                <div className="landing-page-background-pic" />
                </div>
        
                <Image fluid src={require('../assets/egmod1.jpg')} />
            </div>
        )
    }
}