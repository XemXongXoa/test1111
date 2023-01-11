import React, {Component} from 'react';
import {Logo} from "../components/menu/Logo";
import {Menu} from "../components/menu/Menu";
import {MenuItem} from "../components/menu/MenuItem";
class SideBar extends Component {
    render() {
        return (
            <div>
                <Menu>
                    <Logo icon='logo'/>
                    <MenuItem title='Quản lý học sinh' to='/' icon='Chart' />
                    {/*<MenuItem title='Quản lý sinh viên' to='/test' icon='Folder' />*/}
                </Menu>
            </div>

        );
    }
}

export default SideBar;