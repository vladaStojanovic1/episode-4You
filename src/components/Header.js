import React from 'react';
import { Link } from 'react-router-dom';
import './.Header.css';
import Bounce from 'react-reveal/Bounce';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/' className='header-link'>
                <Bounce top cascade>
                    <h2 className='logo'>
                        episode4You
                    </h2>
                </Bounce>
            </Link>
        </div>
    );
}

export default Header;
