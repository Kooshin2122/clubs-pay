import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function ClubCards({
    id,
    title,
    mediaUrl,
    mediaType
}) {
    return (
        <div className='w-[16%] h-[30vh] pb-5  cursor-pointer bg-white shadow-md rounded-lg'>
            <Link to={`/clubs/${id}`} >
                <div className='w-[100%] bg-slate-400/40 h-fit text-center rounded-t-lg'>
                    <img src={`../${mediaUrl}`} className='w-full h-[20vh] rounded-t-md' alt="" />
                </div>
                <div className='w-[95%] px-2 mt-5'>
                    <h1 className='text-xl font-extrabold text-center mb-5'>
                        {title}
                    </h1>
                </div>
            </Link>
            <Outlet />
        </div>
    )
}

export default ClubCards
