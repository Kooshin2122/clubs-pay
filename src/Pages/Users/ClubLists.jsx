import React, { useMemo } from 'react'
import { RiArrowGoBackLine } from 'react-icons/ri'
import ReactPlayer from 'react-player';
import { Link, Outlet, useParams } from 'react-router-dom'
import { useCustomHook } from '../../ContextAPI';
import { MdOutlineReadMore } from 'react-icons/md';
import Table from '../../Components/Table/Table'

function ClubLists({
    description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid exercitationem excepturi, enim assumenda consequuntur soluta autem nisi eum, quae quasi fugiat hic itaque. Inventore, dignissimos recusandae assumenda temporibus voluptatibus excepturi!'
}) {
    const { clubsId } = useParams();
    const { clubsData, setClubsData } = useCustomHook()

    const tHeadValues = ['NO', 'TITLE', 'MEMBERS', 'TOTAL-PAYMENT', 'Date CREATED', 'MORE-DETAILS']
    const trowValues = [
        [1, " Football", '12 clubs', '$3780', '25-03-2019', <Link to={`club/1`}><MdOutlineReadMore className='p-2 text-4xl bg-green-500/40 ml-14 rounded-full cursor-pointer' /></Link>],
        [1, " Football", '12 clubs', '$3780', '25-03-2019', <Link to={`club/2`}><MdOutlineReadMore className='p-2 text-4xl bg-green-500/40 ml-14 rounded-full cursor-pointer' /></Link>],
        [1, " Football", '12 clubs', '$3780', '25-03-2019', <Link to={`club/3`}><MdOutlineReadMore className='p-2 text-4xl bg-green-500/40 ml-14 rounded-full cursor-pointer' /></Link>],
    ]

    return (
        <div className='w-[100%] h-fit mb-[20%] m-auto'>
            <div className='w-[95%] m-auto'>
                <h1 className='text-xl flex justify-between font-bold mt-2 px-3 border-b-2 pb-2'>
                    <p>Clubs List</p>
                    <Link to='clubListRegister' className='hover:text-blue-500 '>
                        Add New Club
                    </Link>
                    <Outlet />
                </h1>
            </div>
            <div className='w-[95%] h-fit m-auto mt-12 bg-blue-500/5 p-5 shadow-md rounded-md'>
                <Table tableHead={tHeadValues} tableRow={trowValues} />
            </div>
        </div>
    )
}

export default ClubLists

