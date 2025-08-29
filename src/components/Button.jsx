import React from 'react';

const Button = ({
  children,
  size = 'md',
  variant = 'primary',
  fullWidth = false,
  className = '',
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold transition-colors duration-200 border-2 whitespace-nowrap shadow-sm relative';

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
      textSize = 'text-[14px]';
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
  if (variant === 'primary') {
    variantClasses = [
      "relative",
  "border-2 rounded-full border-[#8ba649]", // ✅ solid border with your color

  // ✅ Background (keep same)
  "[background:linear-gradient(#A9CF45,#A9CF45)_padding-box,linear-gradient(to_bottom,rgba(255,255,255,0.12),rgba(255,255,255,0))_border-box]",

  // ✅ Hover state (keep same, only background change)
  "hover:[background:linear-gradient(#8CB031,#8CB031)_padding-box,linear-gradient(to_bottom,rgba(255,255,255,0.12),rgba(255,255,255,0))_border-box]",

  // ✅ Box shadows (keep same)
  "[box-shadow:0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs),0px_-2px_0px_0px_var(--ColorsEffectsShadowsshadow-skeumorphic-inner)_inset,0px_0px_0px_1px_var(--ColorsEffectsShadowsshadow-skeumorphic-inner-border)_inset]",

  // ✅ Inner white border effect (before element)
  "before:content-[''] before:absolute before:inset-0 before:rounded-full before:pointer-events-none before:[box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.2)]",
    ].join(" ");
  
  
  } else if (variant === 'secondary') {
    variantClasses =
      'bg-white border-[#D5D7DA] hover:bg-gray-50';
  }

  const widthClass = fullWidth ? 'w-full' : 'w-auto';

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${textSize} ${lineHeight} ${widthClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
