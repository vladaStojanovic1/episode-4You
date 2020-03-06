import React from 'react';
import RubberBand from 'react-reveal/RubberBand';
import { FaRegFrown } from "react-icons/fa";
import './.Error.css';


const Error = () => {
    return (
        <div className='error'>
            <RubberBand>
                <FaRegFrown className='icon-error' />
            </RubberBand>
            <h3>We couldn't find any show<br /> matching your<br /> search</h3>
        </div>
    );
}

export default Error;
