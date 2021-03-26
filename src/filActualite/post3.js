import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitPost } from '../Redux/Actions/postAction'
import { FaSearch } from 'react-icons/fa'
import { FaPhotoVideo } from 'react-icons/fa'
import { AiFillEdit } from 'react-icons/ai'
import { HiOutlineEmojiHappy } from 'react-icons/hi'
import { FiLink } from 'react-icons/fi'
import Thread from './Thread'
import { UploadImagePost, getSuggestedUsers } from '../Redux/Actions/dataAction'
import { Divider } from '@material-ui/core'

export default function Post3() {
    const [username, setUserName] = useState('')
    const [body, setBody] = useState('')
    const data = useSelector((state) => state.data)
    const user = useSelector((state) => state.user)
    const [uploading, setUploading] = useState(false)
    const [image, setImage] = useState('')

    const dispatch = useDispatch()
    // console.log(user)

    function onCreatePost() {
        const post = {
            body,
            image: data.image != '' ? data.image : '',
        }

        submitPost(post, user, dispatch)
    }

    const onUpload = (e) => {
        const files = Array.from(e.target.files)
        setUploading(true)

        const formData = new FormData()

        files.forEach((file, i) => {
            formData.append(i, file)
        })
        UploadImagePost(dispatch, formData)
    }
    const removeImage = (id) => {
        setImage({
            image: image.filter((image) => image.public_id !== id),
        })
    }

    const { upload, images } = { uploading, image }

    return (
        <div className='flex flex-col w-full h-full items-start md:items-center '>
            <div className='border-transparent p-2 rounded-md shadow-md bg-gradient-to-t from-green-200 via-gray-50 to-blue-100 w-full md:w-4/5 mt-4 mb-4'>
                <div className='rounded-full '>
                   <textarea className='w-full md:w-full h-24 resize-none border-gray-200 rounded-md' onChange={(e) => setBody(e.target.value)} value={body} placeholder="Exprimez vous ici !"> </textarea>
               </div>
            <div className=' flex justify-center focus:outline-none  '> {data.image != '' ? <img src={data.image} width='200PX' height='200px' /> : null}</div>

            <div className='grid grid-col-2'>
                <div className='grid grid-col-3 md:grid-cols-4'>
                    <div className='col-span-2 '>
                    <FiLink className='text-gray-600 h-5 w-5'>
                    <input onChange={onUpload} type='file' className=' hidden '/></FiLink>
                    <span className=' '> Fechier</span>
                    </div>
                    <div>
                        <button className=' focus:outline-none '>
                            <FaPhotoVideo className='text-pink-800 h-8 w-8'><input onChange={onUpload} type='file' className=' hidden '/></FaPhotoVideo>
                            <span className=' '> Photo</span>
                        </button>
                    </div>
                    <div>
                    <button className=''>
                        <HiOutlineEmojiHappy className='text-yellow-500 h-8 w-8 '></HiOutlineEmojiHappy>
                        <span>Emoji</span>
                    </button>
                    </div>
                    {/* <div>
                     <button className=''>
                        <FiLink className='text-gray-600 h-5 w-5'></FiLink>
                        <span>Lien</span>
                    </button> 
                    </div> 
                     <div className=''>
                        <button className=''>
                            <FaSearch></FaSearch>
                        </button>
                    </div> */}
                    </div>
                    <div className=' flex flex-col items-center border-t-2 focus:outline-none'>
                    <button
                        onClick={onCreatePost}
                        className='  text-blue-900 hover:text-gray-900 font-bold px-4 focus:outline-none inline-flex  rounded-full'>
                        <AiFillEdit className=' text-white ' size={30} ></AiFillEdit>
                        <span className=' text-xl ' > Publier </span>
                    </button>
                    </div>

                </div>
            </div>

            <div className=' w-full md:w-3/4 mb-2'>
                <Thread />
            </div>
        </div>
    )
}
