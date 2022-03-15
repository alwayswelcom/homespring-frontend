import React from 'react';

interface SelectProps {
    children: JSX.Element[] | JSX.Element;
    className?: string;
    onChange?: (ev: React.FormEvent<HTMLSelectElement>) => void
    value?: string | string[],
}

const Select = ({children, className, onChange, value}: SelectProps) => {
    let customClass = className ? className: ""
    return (
        <select className={`border border-zinc-300 h-10 rounded text-zinc-500 pl-3 focus-visible:outline-0 ${customClass}`}
            value={value} onChange={onChange}
        >
            {children}
        </select>
    );
}



export default Select;