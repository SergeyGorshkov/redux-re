import React from 'react';

import './error-indicator.css';
import icon from './error.png';

const ErrorIndicator = () => {
    return(
        <div className="error-indicator">
            <img src={icon} alt="error icon" />
            <span className="error">ERROR!</span>
            <span>something has gone terribly wrong </span>
            <span>(but we already read books to fix it)</span>
        </div>
    );
}

export default ErrorIndicator;