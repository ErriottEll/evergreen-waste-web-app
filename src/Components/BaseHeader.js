import React, { Component } from 'react';
import { Menu, Image, Segment, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default class BaseHeader extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;

        return (
            <Segment inverted>
                <Menu stackable inverted>
                    <Menu.Item header as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} >
                        <Image src={require('../assets/AquilaeLogo.png')} size='mini' circular />
                        Aquilae Co.
                    </Menu.Item>
                    <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}><Icon circular inverted color='teal' name='home' />Home</Menu.Item>
                    <Menu.Item as={Link} to='/about' name='about' active={activeItem === 'about'} onClick={this.handleItemClick}><Icon circular inverted color='teal' name='newspaper' />About</Menu.Item>
                    <Menu.Item as={Link} to='/videos' name='videos' active={activeItem === 'videos'} onClick={this.handleItemClick}><Icon circular inverted color='teal' name='video' />Videos</Menu.Item>

                </Menu>
            </Segment>
        )
    }
}