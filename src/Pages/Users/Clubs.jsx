import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import ClubCards from './ClubCards';
import { useCustomHook } from '../../ContextAPI';

function Clubs() {
    const { clubsData, setClubsData, getClubsDataFromTheServer, setLoading } = useCustomHook()
    useEffect(async () => {
        await getClubsDataFromTheServer()
        setLoading(false)
    }, [])
    return (
        <div className='w-[95%] m-auto'>
            <div className='mt-5 w-[95%] px-3 pb-2 m-auto mb-7 flex justify-between items-center border-b-2'>
                <h1 className='text-xl font-bold'>Users Page</h1>
                <Link to='/*' className=''>
                    <p className='text-xl font-bold hover:text-blue-500'>Add new Club</p>
                </Link>
                <Outlet />
            </div>
            <div className='w-[100%] h-fit flex flex-wrap m-auto mt-5  gap-9  rounded-t-xl'>
                {
                    clubsData.length ?
                        clubsData.map((value, index) => {
                            return (
                                <ClubCards {...value} key={index} />
                            )
                        })
                        :
                        <ClubCards title='Empty' />
                }
            </div>
        </div>
    )
}

export default Clubs
