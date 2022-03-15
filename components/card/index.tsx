import React from 'react';

interface BaseProps {
    children: JSX.Element[] | React.ReactNode;
    className?: string;
}

const Select = ({children, className}: BaseProps) => {
    let customClass = className ? className: ""
    return (
        <div className={`card ${customClass}`}>
            {children}
        </div>
    );
}



export default Select;