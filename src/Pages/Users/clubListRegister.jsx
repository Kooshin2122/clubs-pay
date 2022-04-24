import React, { useState } from 'react'
import { RiArrowGoBackLine } from 'react-icons/ri'
import { Link, Outlet } from 'react-router-dom'
import RegularBtn from '../../Components/RegularButtons/RegularBtn'
import Inputs from '../../Components/RegularInputs/Inputs'

function ClubListRegister() {
    const [inputValues, setInputValues] = useState({ title: '', members: '', totalPayments: '', dateCreated: '' })

    const inputChangeHandler = (e) => {
        const { value } = e.target
        const { name } = e.target
        if (name == 'title')
            setInputValues({ ...inputValues, title: value })
        if (name == 'members')
            setInputValues({ ...inputValues, members: value })
        if (name == 'totalPayments')
            setInputValues({ ...inputValues, totalPayments: value })
        if (name == 'dateCreated')
            setInputValues({ ...inputValues, dateCreated: value })
    }

    console.log('inputValues', inputValues);


    return (
        <div className='w-[90%] h-[100vh] m-auto' >
            <h1 className='text-xl flex justify-between font-bold mt-2 px-3 border-b-2 pb-2'>
                <p>Clubs Register Page</p>
                <Link to='/clubs' className='flex items-center'>
                    back
                <RiArrowGoBackLine className='text-2xl font-black ml-2' />
                </Link>
                <Outlet />
            </h1>
            <div className='w-[90%] min-h-[75vh] h-fit m-auto mt-5 py-5 shadow-md bg-white rounded-2xl '>
                <h1 className='text-center text-2xl font-bold w-fit m-auto pb-2 border-b-2'>
                    New Club Register
            </h1>
                <form
                    className='w-[90%] h-fit m-auto mt-10 px-10 py-7'>
                    <p className='text-xl ml-1 font-semibold'>Club Title</p>
                    <Inputs
                        value={inputValues.title}
                        name='title'
                        onchangeHandler={inputChangeHandler}
                        fontSize='text-xl mt-3 mb-5 '
                        bgColor='bg-slate-200'
                        placeHolder='Club title'
                    />
                    <p className='text-xl ml-1 font-semibold'>Members</p>
                    <Inputs
                        value={inputValues.members}
                        name='members'
                        onchangeHandler={inputChangeHandler}
                        type='number'
                        fontSize='text-xl mt-3 mb-5 '
                        bgColor='bg-slate-200'
                        placeHolder='Members'
                    />
                    <p className='text-xl ml-1 font-semibold'>Total Payment</p>
                    <Inputs
                        value={inputValues.totalPayments}
                        name='totalPayments'
                        onchangeHandler={inputChangeHandler}
                        type='number'
                        fontSize='text-xl mt-3 mb-5 '
                        bgColor='bg-slate-200'
                        placeHolder='total payments'
                    />
                    <p className='text-xl ml-1 font-semibold'>Date Created</p>
                    <Inputs
                        value={inputValues.dateCreated}
                        name='dateCreated'
                        onchangeHandler={inputChangeHandler}
                        type='date'
                        fontSize='text-xl mt-3 mb-5 '
                        bgColor='bg-slate-200'
                        placeHolder='Date created'
                    />
                    <div className='text-right'>
                        <RegularBtn
                            label='Save'
                            margin='mt-5'
                            type='submit'
                            bgColor='bg-blue-400 hover:bg-blue-500'
                            padding='py-3 px-6'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ClubListRegister
