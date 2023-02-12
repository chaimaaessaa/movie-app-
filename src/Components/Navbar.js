import React from 'react'
import search from '../images/333.png'
import {Link} from 'react-router-dom'
const Navbar = () => {

    return(
        <div className='header'>
                <ul>
                   <Link to = "/" style={{textDecoration : 'none'}}><li className='animsite'> Anime-Site </li></Link> 
                   <Link to = "/home" style={{textDecoration : 'none'}}><li className='home'> Home</li></Link>

                </ul>
                <from className = 'search_bar'>
                <input placeholder='Filter Movie By Title'></input>
                <button className='butt' type="button"> <img src= {search} alt = ''></img> </button>
                </from>
            
            <div className='button'>
                <button>SINGIN</button>
            </div>
        </div>
    )
}

export default Navbar;