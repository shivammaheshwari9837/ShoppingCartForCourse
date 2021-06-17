import '../../styles/HomePage/header.css';
import companyLogo from '../../assests/Hashedin.png';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';

const Header = () =>{
    return(
        <div className="main-header">
            <NavLink to="/" style={{ textDecoration: 'none' }}>
                <div className="hashedin-icon"><img src={companyLogo} alt="logo" /></div>
            </NavLink>
            <div></div>
            <NavLink to="/" style={ {color: 'inherit', textDecoration: 'inherit'} }>
                <div className="courses-icon">Courses</div>
            </NavLink>
            <NavLink to="/wishlist" style={ {color: 'inherit', textDecoration: 'inherit'} }>
                <div className="wishlist-icon">My Wishlist</div>
            </NavLink>
            <NavLink to="/cartlist" style={ {color: 'inherit', textDecoration: 'inherit'} }>
                <div className="cart-icon"><FontAwesomeIcon icon={faShoppingCart}/></div>
            </NavLink>
            <NavLink to="/profile" style={ {color: 'inherit', textDecoration: 'inherit'} }>
                <div className="profile-icon"><FontAwesomeIcon icon={faUser}/></div>
            </NavLink>
        </div>
    );
}

export default Header;