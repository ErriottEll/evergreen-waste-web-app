import React, { Component } from 'react';
import { Menu, Image, Segment, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../index.css';

export default class BaseHeader extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;

        return (
            <Segment inverted className='menu-segment'>
                <Menu stackable inverted className='menu-segment'>
                    <Menu.Item header as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} >
                        <Image src={require('../assets/AquilaeC3.png')} size='mini' circular />
                        &nbsp;Aquilae Co.
                    </Menu.Item>
                    <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} className="siteTeal"><Icon circular inverted color='teal' name='home' />Home</Menu.Item>
                    <Menu.Item as={Link} to='/about' name='about' active={activeItem === 'about'} onClick={this.handleItemClick}><Icon circular inverted color='teal' name='newspaper' />About</Menu.Item>
                    <Menu.Item as={Link} to='/videos' name='videos' active={activeItem === 'videos'} onClick={this.handleItemClick}><Icon circular inverted color='teal' name='video' />Videos</Menu.Item>

                </Menu>
            </Segment>
        )
    }
}