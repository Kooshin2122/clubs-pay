import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import RegularBtn from '../RegularButtons/RegularBtn'
import Inputs from '../RegularInputs/Inputs'

function LoginForm() {
    const [isActive, setIsActive] = useState(true)
    return (
        <div className='w-[100%] h-screen bg-gray-200 flex justify-center items-center'>
            <form className='w-[90%] min-h-[90vh] h-fit  bg-white shadow-md rounded-2xl flex'>
                <div className='max-w-[45%] min-h-[90vh] bg-emerald-400 rounded-l-2xl'>
                    <img src="./img/Logo1.png" style={{ objectFit: "fill" }} className='w-[100%] m-auto' alt="" />
                </div>
                <div className='w-[60%]'>
                    <div className='w-[70%] h-[50vh] m-auto'>
                        <h1 className='text-2xl font-bold text-center mt-[25%]'>Login</h1>
                        <div className='flex flex-col gap-3 justify-center mt-3 '>
                            <p className='text-center mb-12'>Just for admin</p>
                            <TextField id="outlined-basic" label="UserName" variant="outlined" />
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                            />
                            <RegularBtn
                                label='Login'
                                bgColor='bg-emerald-400 hover:bg-emerald-500 mt-5'
                                padding='py-3 px-2' />
                        </div>
                    </div>


                </div>
            </form>
        </div >
    )
}

export default LoginForm
