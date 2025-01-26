import React from 'react'

const Button = ({text, fontSize, paddingX, paddingY}) => {
  return (
    <>
      <a href="#" className={`relative inline-block ${paddingX} ${paddingY} font-semibold text-blue-600 border-4 border-blue-600 rounded-md overflow-hidden group`}>
      <span className={`relative z-10 transition-colors duration-300 group-hover:text-white ${fontSize}`}>
        {text}
      </span>
      <span className="absolute inset-0 -left-2 -right-3 -top-1 -bottom-1 bg-blue-600 transition-transform transform -skew-x-12 scale-x-0 group-hover:scale-x-100 z-0"></span>
    </a>

    
   </>

  )
}

export default Button