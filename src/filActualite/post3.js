import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitPost } from '../Redux/Actions/postAction'
import { FaSearch } from 'react-icons/fa'
import { BsCamera } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { BiCool } from 'react-icons/bi'
import { BiFile } from 'react-icons/bi'
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

            <div className='grid grid-cols-4 focus:outline-none'>
                <div className='col-span-3 grid grid-cols-3 ml-3 '>
                        <label>
                        <BiFile className='text-gray-900  h-8 w-8 cursor-pointer transform hover:-translate-y-1 hover:scale-110'/>
                        <input onChange={onUpload} type='file' className=' hidden '/>
                        </label>
                        <label>
                            <BsCamera className='text-gray-900 h-8 w-8 cursor-pointer transform hover:-translate-y-1 hover:scale-110'/>
                            <input onChange={onUpload} type='file'accept="image/png, image/jpeg"  className='hidden '/>
                        </label>
                        <label>
                        <BiCool className='text-yellow-500 h-8 w-8 cursor-pointer transform hover:-translate-y-1 hover:scale-110'/>
                         </label>

                 </div>
                    <div className=' flex flex-col items-center border-t-2 focus:outline-none'>
                    <button
                        onClick={onCreatePost}
                        className='  text-blue-900 hover:text-gray-900 font-bold px-4 focus:outline-none inline-flex  rounded-full transform hover:-translate-y-1 hover:scale-110'>
                        <AiFillEdit className=' text-blue-700 ' size={30} />
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
