import React from 'react';
import {FaUserCircle} from 'react-icons/fa';
export const Header = (props) =>{
        return (
            <nav className='header'>
                   <div className='header-left'>
                       <span className='header-left--title'>{props.title}</span>
                   </div>
                    <div className='header-right'>
                        <span className='header-right--text'>ADMIN</span>
                        <FaUserCircle className='header-right--icon'/>
                        {/*<img className='header-right--icon' src={require(`../assets/photo.png`)} alt=""/>*/}
                    </div>
            </nav>
        );
}
