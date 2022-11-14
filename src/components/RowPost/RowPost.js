import React,{useEffect,useState} from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'
function RowPost(props) {
  const [Movies, setMovies] = useState([])
  const [urlId,seturlId] = useState('')
  useEffect(() => {
      axios.get(props.url).then((Response)=>{
        console.log(Response.data)
        setMovies(Response.data.results)
      })
       
  }, [props])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(Response=>{
      if (Response.data.results.length!==0){
        seturlId(Response.data.results[0])
      }else {
        console.log('Array empty')
      }
    })
  }
  
  return (
    <div className='row'>
        <h2>{props.title} </h2>
        <div className='posters'>
          {Movies.map((obj)=>

            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter': 'poster'} src={`${imageUrl+obj.backdrop_path }`}  alt="poster" />
            
            )}
          
            
        </div>

        { urlId &&   <YouTube opts={opts} videoId= {urlId.key} />   }
    </div>
  )
}

export default RowPost



