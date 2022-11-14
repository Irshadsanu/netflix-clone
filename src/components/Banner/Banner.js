import React,{useEffect, useState} from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import YouTube from 'react-youtube'
import axios from '../../axios'
import './Banner.css'

function Banner() {
  const [Movie, setMovie] = useState()
  const [urlId,seturlId] = useState('')
  useEffect(() => {
    axios.get(`trending/all/day?api_key=${API_KEY}`).then((Response)=>{
      console.log(Response.data.results[0])
      setMovie(Response.data.results.sort(function(a,b){return 0.5 - Math.random()})[0])
    })
   

  }, [])
  const opts = {
    height: '300',
    width: '450',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie =(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(Response=>{
      if (Response.data.results.length!==0){
        seturlId(Response.data.results[0])
      }else{
        console.log('trailer not available')
      }
    })
  }
  
  return (
    <div 
    style={{backgroundImage:`url(${Movie ? imageUrl+Movie.backdrop_path: ""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{Movie ? Movie.title :""} </h1>
            <div className='banner-btn'>
                  <button onClick={()=>handleMovie(Movie.id)} class="button-82-pushable">
                  <span class="button-82-shadow"></span>
                  <span class="button-82-edge"></span>
                  <span class="button-82-front text">
                    TRAILER
                  </span>
                </button>
               
            </div>
               <h1 className='discription'>{Movie ? Movie.overview:""} </h1>
            <div className='video'>
              {urlId && <YouTube opts={opts} videoId={urlId.key}/>}
            </div>

        </div>
       

    <div className="fade-btm">
      </div>        
    </div>
  )
}

export default Banner