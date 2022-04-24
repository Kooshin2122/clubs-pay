import React, { useCallback, useState } from 'react'
import { RiArrowGoBackLine } from 'react-icons/ri'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import RegularBtn from '../../Components/RegularButtons/RegularBtn'
import Inputs from '../../Components/RegularInputs/Inputs'
import { useDropzone } from 'react-dropzone'


function ClubRegister() {
    const [inputValue, setInputValue] = useState('')
    // const [newClub, setNewClub] = useState({ title: '', image: '' })

    const inputChangeHandler = (e) => {
        const { value } = e.target
        setInputValue(() => value)
        console.log(e.target.value);
    }

    const [image, setImage] = useState()
    const onDrop = useCallback(acceptedFiles => {
        const [file] = acceptedFiles
        setImage(file)
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    console.log('title--', inputValue, '--IMAGE--', image);
    const onSubmit = (e) => {
        e.preventDefault()
        // call post method and pass 
    }
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

                <form onSubmit={onSubmit}
                    className='w-[90%] h-fit m-auto mt-10 px-10 py-7'>
                    <p className='text-xl ml-1 font-semibold'>Club Title</p>
                    <Inputs
                        value={inputValue}
                        name='title'
                        onchangeHandler={inputChangeHandler}
                        fontSize='text-xl mt-3 mb-5 '
                        bgColor='bg-slate-200'
                        placeHolder='Club title'
                    />
                    <p className='text-xl ml-1 mb-3 font-semibold'>Upload Club Image</p>
                    <div
                        {...getRootProps()}
                        className='w-[100%] h-[30vh] bg-slate-200 flex justify-center items-center shadow-md overflow-auto border-8 border-dashed border-slate-500 '>
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                                <p>Drop the files here ... </p> :
                                <p>Drag and drop image here, <br /> or click to uplaod image</p>
                        }
                        <div className='w-[8%] absolute bottom-[22%] right-[15%]'>
                            <img
                                src={image && URL.createObjectURL(image)}
                                style={{ objectFit: "fill" }}
                                alt='image not found'
                                className='h-full'
                            />
                        </div>
                    </div>
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

export default ClubRegister
