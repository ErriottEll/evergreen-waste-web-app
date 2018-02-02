import React, { Component } from 'react';
import { Header, Image, Button, Icon, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../index.css';

export default class HomePage extends Component {
    render() {
        return (
            <div>
            <div className='landing-page-background'>
                <Header as='h1' icon textAlign='center'>
                    <Image src={require('../assets/AquilaeC3.png')} circular />
                    <Header.Content className='landing-title-text'>
                        Aquilae Co.
                    </Header.Content>
                    <Header as='h3' textAlign='center'>Catchy slogan goes here</Header>
                    <p className='landing-paragraph'>Hello, this can either be removed or turn into a short description, Lorem ipsum blah blah blah yeah I know the teal from the ui package I'm using is different from the teal of the logos and stuff</p>
                    <Button.Group>
                        <Button animated color='grey' as={Link} to='/about'>
                            <Button.Content visible>Read more</Button.Content>
                            <Button.Content hidden>
                            <Icon circular name='newspaper' />
                            </Button.Content>
                        </Button>
                        <Button.Or/>
                        <Button animated color='black' as={Link} to='/videos'>
                            <Button.Content visible>Watch more</Button.Content>
                            <Button.Content hidden>
                                <Icon name='video' size='mini' />
                            </Button.Content>
                        </Button>
                    </Button.Group>
                </Header>
                </div>
                <Image fluid src={require('../assets/EditedWilmingtonShot.jpg')} />
            </div>
        )
    }
}