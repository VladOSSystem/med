import React from 'react';
import { Link } from 'react-router-dom';
import Image404 from '../assets/images/404-error.png';

const Page404: React.FC = () => {
    return (
        <div className='div_align-center error-404'>
            <img src={Image404} alt="404" />
            404 error <Link to={'/'}>return to main</Link>
        </div>
    );
};

export default Page404;