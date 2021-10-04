import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1>404</h1>
            <h3 className="m-0 pb-3">This is not the right page you're looking for.</h3>
            <small>You may mistyped address or the page may have moved.</small>
        </div>
    );
};

export default NotFound;