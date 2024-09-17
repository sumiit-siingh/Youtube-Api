import React from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom' 

function Video() {
    const { videoId } = useParams();
  return (
    <div className='video_page'>
        <ReactPlayer url={`https://www.youtube.com/embed/${videoId}`} controls width='100%' height='100%' playing={true}/>
    </div>
  )
}

export default Video