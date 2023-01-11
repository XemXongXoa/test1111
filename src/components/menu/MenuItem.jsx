import {NavLink} from "react-router-dom";
export const MenuItem = ({title, to, icon}) => {

    console.log(title , to , icon)
    return (
        <ul className='nav-items'>
             <li className='navbar-text'>
            <NavLink to={to} className='navbar-text'>
                 <img className='navbar-text--icon' src={require(`../../assets/${icon}.png`)} alt='icon'/>
                   <span className='navbar-text--title'>{title}</span>
            </NavLink>
             </li>

         </ul>


    )
}