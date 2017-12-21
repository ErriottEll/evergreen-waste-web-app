import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default class BaseHeader extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;

        return (
            <Menu stackable inverted pointing size=''>
                <Menu.Item>
                    <img src='../AquilaeC3.png' />
                </Menu.Item>

                <Link to='/'><Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>Home</Menu.Item></Link>
                <Link to='/about'><Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>About</Menu.Item></Link>
                <Link to='/videos'><Menu.Item name='videos' active={activeItem === 'videos'} onClick={this.handleItemClick}>Videos</Menu.Item></Link>
            </Menu>
        )
    }
}