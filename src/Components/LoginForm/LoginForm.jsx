import React, { useState } from 'react'
import RegularBtn from '../RegularButtons/RegularBtn'
import Inputs from '../RegularInputs/Inputs'

function LoginForm() {
    const [isActive, setIsActive] = useState(true)
    return (
        <div className='w-[100%] h-screen bg-gray-200 flex justify-center items-center'>
            <form className='w-[70%] min-h-[90vh] h-fit  bg-white shadow-md rounded-2xl flex'>
                <div className='min-w-[40%] min-h-[90vh] bg-slate-300'>
                    h
                </div>
                <div className='w-[60%]'>
                    <div className='flex p-7 justify-center gap-3'>
                        <h1
                            onClick={() => setIsActive(true)}
                            className={`${isActive ? 'activeForm' : ''} text-xl font-semibold  pb-2 cursor-pointer`}>
                            Login
                        </h1>
                        <h1
                            onClick={() => setIsActive(false)}
                            className={`${!isActive ? 'activeForm' : ''} text-xl font-semibold  pb-2 cursor-pointer`}>
                            Sing-Up
                        </h1>
                    </div>
                    {
                        isActive && <div className='w-[70%] h-[50vh] m-auto flex flex-col gap-3 justify-center mt-10 '>
                            <span className='text-xl text-gray-700 font-semibold'>User Name</span>
                            <Inputs border='border-2 border-gray-700' />
                            <span className='text-xl font-semibold text-gray-700'>Password</span>
                            <Inputs type='password' border='border-2 border-gray-700' />
                            <RegularBtn
                                label='Login'
                                bgColor='bg-gray-700 hover:bg-gray-900 mt-5' />

                        </div>
                    }
                    {
                        !isActive && <div className='w-[70%] h-[50vh] m-auto flex flex-col gap-3 justify-center mt-10 '>
                            <span className='text-xl text-gray-700 font-semibold'>Email</span>
                            <Inputs border='border-2 border-gray-700' />
                            <span className='text-xl text-gray-700 font-semibold'>User Name</span>
                            <Inputs border='border-2 border-gray-700' />
                            <span className='text-xl font-semibold text-gray-700'>Password</span>
                            <Inputs type='password' border='border-2 border-gray-700' />
                            <RegularBtn
                                label='Sign-Up'
                                bgColor='bg-gray-700 hover:bg-gray-900 mt-5' />

                        </div>
                    }
                </div>
            </form>
        </div>
    )
}

export default LoginForm
