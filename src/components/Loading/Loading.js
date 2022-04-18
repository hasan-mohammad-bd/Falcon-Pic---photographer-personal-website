import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='Loading d-flex justify-content-center align-items-center'>
            <Spinner animation="grow" />
        </div>
    );
};

export default Loading;