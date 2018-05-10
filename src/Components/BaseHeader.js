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
                    <Menu.Item header as={Link} to='/evergreen-waste-web-app' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} >
                        <Image src={require('../assets/reclogo.png')} size='mini' circular />
                        &nbsp;Evergreen Waste Services
                    </Menu.Item>
                    {/* {We have to link to evergreen-waste-web-app here because of github pages navigation and react router not quite working right or something like that} */}
                    <Menu.Item as={Link} to='/evergreen-waste-web-app' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} className="siteTeal"><Icon circular inverted color='green' name='home' />Home</Menu.Item>
                    <Menu.Item as={Link} to='/about' name='about' active={activeItem === 'about'} onClick={this.handleItemClick}><Icon circular inverted color='green' name='newspaper' />About</Menu.Item>
                    <Menu.Item as={Link} to='/videos' name='videos' active={activeItem === 'videos'} onClick={this.handleItemClick}><Icon circular inverted color='green' name='video' />Videos</Menu.Item>
                    <Menu.Item as={Link} to='/schedule' name='schedule' active={activeItem === 'schedule'} onClick={this.handleItemClick}><Icon circular inverted color='green' name='calendar' />Schedule</Menu.Item>
                </Menu>
            </Segment>
        )
    }
}