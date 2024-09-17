import { useNavigate } from 'react-router-dom'

function VideoCard(items) {
  const navigate = useNavigate();

  function ClickHandler(){
    navigate(`/Video/${items.items.id.videoId}`)
  }

  return (
    <div className='video_card' onClick={ClickHandler}>
        <div><img className='video_image' src={items.items.snippet.thumbnails.high.url} /></div>
        <div className='video_title'>{items.items.snippet.title}</div>
    </div>
  )
}

export default VideoCard