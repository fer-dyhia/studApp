import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { CLEAN_INFOS, CLEAN_POSTS, LOGOUT_USER } from '../Redux/types'
import { Link, useHistory } from 'react-router-dom'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
const { fire } = require('../init')

export default function ClickAway(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const user=useSelector((state)=>state.user)
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen((prev) => !prev)
    }

    const handleClickAway = () => {
        setOpen(false)
    }
    const logOut = (e) => {
        fire.auth()
            .signOut()
            .then(() => {
                localStorage.clear()
                dispatch({ type: LOGOUT_USER })
                dispatch({ type: CLEAN_POSTS })
                dispatch({type:CLEAN_INFOS})
                history.push('./')
            })
    }
    console.log(props)
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className='pt-4 pr-2'>
                <button type='button' onClick={handleClick} className=' flex text-base rounded-full focus:outline-none'>
                    <span className='sr-only'>Ouvrire le menu</span>
                    <img
                        className=' h-10 w-10  rounded-full '
                        src={user.credentials.imageUrl}
                        alt=''
                    />
                </button>

                {open ? (
                    <div
                        className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5'
                        role='menu'
                        aria-orientation='vertical'>
                        <Link to={{ pathname: `/profilUser/${user.credentials.uid}`, state: { username:user.credentials.username} }} className='block px-4 py-2 text-base text-gray-800 hover:bg-gray-700' role='menuitem'>
                            Ton Profil
                        </Link>
                        <Link to={'parametre'} className='block px-4 py-2 text-base text-gray-800 hover:bg-gray-700' role='menuitem'>
                            Parametres
                        </Link>
                        <a href='#' onClick={logOut} className='block px-4 py-2 text-base text-gray-800 hover:bg-gray-700' role='menuitem'>
                            Se déconnecter{' '}
                        </a>
                    </div>
                ) : null}
            </div>
        </ClickAwayListener>
    )
}
