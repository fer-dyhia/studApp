import React, { useEffect, useState } from 'react'
import { connectSearchBox,connectHits } from 'react-instantsearch-dom';

import { AiFillMessage } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import ClickAway from './clickAway'
import { MdPages } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import AffichInvit from './affichInvit'
import AffichNotif from './affichNotif'
import { Link } from 'react-router-dom'
import { Divider } from '@material-ui/core'

import logo from '../img/logo2.png'
import logor from '../img/logo5.png'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
const searchClient = algoliasearch('XGD6GDN9M5', 'e22f85425f06d8deb778c40aaf9d2b0b',{
    _useRequestCache: true,
  });

const algoliaClient = {
    search(requests) {
      const shouldSearch = requests.some(({ params: { query }}) => query !== '');
      if (shouldSearch) {
        return searchClient.search(requests);
      }
      return Promise.resolve({
        results: [{ hits: [] }],
      });
    },
    searchForFacetValues: searchClient.searchForFacetValues,
  };



const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
   <div>
       <input
      type="search"
      value={currentRefinement}
      onChange={event => refine(event.currentTarget.value)}
      placeholder='Recherche'
      className='rounded-full static'
    />
    {/* <button onClick={() => refine('')}>Reset query</button>
    {isSearchStalled ? 'My search is stalled' : ''} */}
   </div>
    
);
const Hits = ({ hits }) => (
  <div className=' text-gray-500 absolute w-52 '>

  <ol >
    {hits.map(hit => (
    
    
 
      <li className='border-b-2  border-blue-700 border-opacity-50  bg-white px-2 py-2' key={hit.objectID}>  <Link to={{ pathname: `/profilUser/${hit.uid}`, state: { username:hit.username} }}  role='menuitem'>{hit.username}</Link></li>
      ))}
  </ol>
  </div>
);
const CustomHits = connectHits(Hits);

const CustomSearchBox = connectSearchBox(SearchBox);



export default function Post1() {
    const User = useSelector((state) => state.user)

   
    

    return (
        <div className='fixed z-50 w-full md:w-full bg-gray-800 shadow-xl border-b-2 border-gray-200 '>
            {(User.loading != null) | true ? (
                
                <div className='flex flex-row  '>
                    <InstantSearch searchClient={algoliaClient} indexName="Users">
                
                    <div className=' flex items-center w-9/12'>
                        <div className='w-0 md:w-1/5 pl-0 md:pl-2 pt-0 md:pt-2  invisible md:visible  cursor-pointer '>
                                <img src={logo} alt='logo'/>
                        </div>
                        <div className='md:w-0 w-1/5 md:pl-0 pl-1 md:pt-0 pt-0 md:h-0 visible md:invisible cursor-pointer  '>
                                <img src={logor} alt='logo'/>
                        </div>
            
                                <div className='flex flex-col ml-4'> 
                                  <div><CustomSearchBox /></div>
                               <div className='flex justify-center'><CustomHits /></div>  
                                 </div>
                                
                                 
                                   
                                   
       
                                
                                
                                
                  
                    </div>
                    </InstantSearch>
                    
                    
                   

                    <div className=' flex flex-row space-x-3 justify-center items-center text-gray-100   '>
                        <div className= 'visible md:invisible '>
                            <Link to='/pages'>
                                <MdPages className=' text-gray-100 h-6 w-6 transform hover:-translate-y-1 hover:scale-110 focus:outline-none' />
                            </Link>
                        </div>
                        <div>
                            <Link to='/club' className= 'visible md:invisible '>
                                <FaUsers className=' text-gray-100 h-6 w-6 transform hover:-translate-y-1 hover:scale-110 focus:outline-none'  />
                            </Link>
                        </div>
                        <div>
                            <Link to='/messagerie'>
                                <AiFillMessage className=' text-gray-100 h-6 w-6 md:h-10 md:w-10 transform hover:-translate-y-1 hover:scale-110 focus:outline-none'  />
                            </Link>
                        </div>

                        <div>
                        <AffichInvit/>
                        </div>
                         <div>
                        <AffichNotif  />
                        </div>
                    </div>
                    <div className='flex flex-row pl-4 pb-4 justify-center items-center '>

                        <div>
                            <ClickAway/>
                        </div>
                        <div>
                            {User.loading == false ? <h3 className='w-0 md:w-full md:pt-3 md:text-xl text-yellow-400 invisible md:visible'>{User.credentials.username}</h3> : null}
                        </div>

                    </div>
                </div>
                
            ) : null}
        </div>
    )
}