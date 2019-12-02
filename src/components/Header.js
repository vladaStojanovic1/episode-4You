import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocalMovies } from 'react-icons/md';
import './.Header.css';


const Header = () => {
    return (
        <div className='header'>
            <Link to='/' className='header-link'>
                <h2 className='logo'>
                    TV<MdLocalMovies className='logo-icon' />
                    Shows
                    </h2>
            </Link>
        </div>
    );
}

export default Header;
