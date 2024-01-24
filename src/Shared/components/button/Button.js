import React from 'react';

const Button = ({onClick,className,children,type="button",bgColor='primary'}) => {
    let BgColor='bg-primary';
    switch (bgColor) {
        case 'primary':
            BgColor='bg-primary';
            break
        case 'secondary':
            BgColor='bg-secondary';
            break
        default :
            break
    }
    return (
        <button 
            type={type}
            onClick={onClick}
            className={`py-3 px-6 rounded-lg capitalize ${BgColor} w-full mt-auto ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;