import React from 'react';

const Button = ({
  children,
  size = 'md',
  variant = 'primary',
  fullWidth = false,
  className = '',
}) => {
 
  const baseClasses = 'inline-flex items-center justify-center font-bold transition-colors duration-200 border-2 whitespace-nowrap';


  let sizeClasses = '';
  let textSize = '';
  let lineHeight = '';
  switch (size) {
    case 'sm':
      sizeClasses = 'py-1.5 px-3 rounded-full';
      textSize = 'text-sm';
      lineHeight = 'leading-[16px]';
      break;
    case 'md':
      sizeClasses = 'py-[10px] px-[14px] rounded-full';
      textSize = 'text-sm';
      lineHeight = 'leading-[20px]';
      break;
    case 'xl':
      sizeClasses = 'py-[12px] px-[18px] rounded-full';
      textSize = 'text-lg';
      lineHeight = 'leading-[24px]';
      break;
    default:
      sizeClasses = 'py-[10px] px-[14px] rounded-full';
      textSize = 'text-base';
      lineHeight = 'leading-[20px]';
  }

  let variantClasses = '';
  let style = {};
  if (variant === 'primary') {
    variantClasses = 'text-gray-900 border-transparent';
    style = {
      background: 'linear-gradient(#A9CF45, #A9CF45) padding-box, linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(255,255,255,0)) border-box',
      border: '2px solid #8aa740',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // optional depth
    };
    
  } else if (variant === 'secondary') {
    variantClasses = 'text-gray-900 bg-white border-[#D5D7DA] hover:bg-gray-50';
    style = {}; // No shadows for secondary based on provided info
  }

  const widthClass = fullWidth ? 'w-full' : 'w-auto';

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${textSize} ${lineHeight} ${widthClass} ${className}`}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;