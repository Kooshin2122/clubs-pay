import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineSetting, AiOutlineSearch } from "react-icons/ai";
import { FaUserInjured } from "react-icons/fa";

import '/Users/ikramkahie/Documents/MorePainMoreGain/React-Apps/dashboard/src/Components/Header/Header.css'
import Inputs from '../RegularInputs/Inputs';

function Header() {
    return (
        <header className='header'>
            <div className="leftSide w-[40%]">
                <Inputs
                    width={'w-[70%]'}
                    padding={'py-2 pl-8'}
                    placeHolder={'Search here....'}
                    bgColor='bg-slate-100'
                />
                <AiOutlineSearch
                    className='absolute top-7 left-9 text-xl text-blue-500' />
            </div>
            <div className="rightSide w-[50%] flex items-center justify-end">
                <Avarter Icon={IoIosNotificationsOutline} margin='ml-3' />
                <Avarter Icon={AiOutlineSetting} margin='ml-3' />
                <Avarter Icon={FaUserInjured} margin='ml-3' />
            </div>
        </header>
    )
}

export default Header

export const Avarter = ({
    Icon = FaUserInjured,
    padding = 'p-3',
    text = 'text-5xl',
    bgColor = 'bg-slate-100',
    textColor = 'text-blue-500',
    margin = ''
}) => {
    return (
        <Icon className={`${text} ${bgColor} ${padding} ${textColor} ${margin} text-right  rounded-full cursor-pointer`} />
    )
}