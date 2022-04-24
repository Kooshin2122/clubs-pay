import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { CgDetailsMore } from 'react-icons/cg';

function ClubCards({
    id,
    title,
    mediaUrl,
    mediaType
}) {
    return (
        <div className='w-[30%] h-[20vh] m-auto p-5 cursor-pointer bg-white shadow-md rounded-lg'>
            <Link to={`/clubs/${id}`} className='w-[100%] flex gap-5 items-center' >
                <div className='w-[70px] mt-3 bg-slate-400/40 h-[70px] text-center rounded-full'>
                    <img src={`../${mediaUrl}`}
                        className='w-[70px] h-[70px] rounded-full' alt="image not found"
                        style={{ objectFit: 'fill' }} />
                </div>
                <div className='w-[70%]'>
                    <h1 className='text-lg mt-3 font-bold'>
                        {title}
                    </h1>
                    <p className='flex justify-between text-xs text-slate-500 font-semibold mt-1'>
                        12 members
                        <span>
                            Expense
                            <span className='text-green-500 font-bold px-1'>$ 3201</span>
                        </span>
                    </p>
                </div>
            </Link>
            <Outlet />
            <p className='w-[95%] ml-4 flex justify-between items-center text-right mt-5'>
                <span>
                    <CgDetailsMore className='text-2xl text-blue-500' />
                </span>
                More details.....
            </p>
        </div>
    )
}

export default ClubCards
