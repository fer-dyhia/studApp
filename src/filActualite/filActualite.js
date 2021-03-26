import React, { useEffect }  from 'react'
import Post from './post'
import { useDispatch,useSelector } from 'react-redux'
import { getPosts } from '../Redux/Actions/postAction'
import { getSuggestedUsers } from '../Redux/Actions/dataAction'

export default function FilActualite() {
  
   
    return <Post />
}
