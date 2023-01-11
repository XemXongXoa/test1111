import PropTypes from 'prop-types';

export const Menu = ({children}) => {
        return (
            <nav className='nav-menu'>
                {children}
            </nav>
        )
}

// Menu.propTypes = {
//     title: PropTypes.string.isRequired,
//     to: PropTypes.string.isRequired,
//     icon: PropTypes.node.isRequired,
// }
