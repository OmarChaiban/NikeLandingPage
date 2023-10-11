import React from 'react'

function Button({label, iconUrl,backgroundColor,borderColor,textColor,fullWidth}) {
  return (
    <Button
    className={`flex justify-center items-center
     gap-2 px-7 py-4 font-montserrat border
     text-lg leading-none

     ${ backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`
     :"bg-coral-red text-white border-coral-red"
      }
     rounded-full ${fullWidth && 'w-full'}"}`}
     >
       {label}
       {iconUrl && 
       <img src={iconUrl} alt="arrow right"
       className='ml-2 rounded-full w-5 h-5'/>
       }
    </Button>
  )
}

export default Button