import React from "react";
import PropsTypes from 'prop-types'
import {Link} from "react-router-dom"



const Movies = (props) => {

    return (
        <div className="movies">

        {
          props.movies.map((item) => {
          return (
               <div className="list">

               <img src= {item.image} alt = ''/>
               <h1>{item.title}</h1>
               <p>{item.para}</p>
               <Link to =  "/Watch"><button className="but">Wach Now</button></Link>
               

               </div>
          )
        })
        }
         
     
         
        </div>
    )
}

Movies.propTypes = {
     movies : PropsTypes.array
    
};

export default Movies;
