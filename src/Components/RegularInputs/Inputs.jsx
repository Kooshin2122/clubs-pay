import React from 'react'

function Inputs({
    type = 'text',
    placeHolder = 'placeHolder',
    value = '',
    onchangeHandler = () => { },
    padding = 'py-2 px-4',
    bgColor = '',
    width = 'w-[100%]',
    border = '',
    fontSize = 'text-base',
    minLength = 3,
    maxLength
}) {
    return (
        <input
            type={type}
            placeholder={placeHolder}
            onChange={onchangeHandler}
            value={value}
            min={3}
            required
            maxLength={maxLength}
            minLength={minLength}
            className={`${width} ${padding} ${bgColor} ${border} ${fontSize} rounded-md text-slate-800 focus:outline-none ring-blue-500 focus:ring`
            }
        />
    )
}

export default Inputs
