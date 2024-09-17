import { MdOutlineSearch } from "react-icons/md"
import "./styles/App.css"
import { useState, useEffect } from "react"
import VideoCard from "./component/VideoCard"

function Feed() {
  const [searchedText, setSearchedText] = useState("new");
  const [Search, setSearch] = useState('')
  const [videos, setVideos] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '00e9c02444msh5f7e12d238b756ap1a4a8fjsnbfde3368e718',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  useEffect(() => {
    if (searchedText) {
      fetch(
        `https://youtube-v31.p.rapidapi.com/search?q=${searchedText}&part=snippet%2Cid&maxResults=21`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setVideos(response.items);
        })
        .catch((err) => console.error(err));
    }
  }, [searchedText]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    setSearchedText(Search);
    setSearch('');
  }
  return (
    <div className="App">
      <div className="page">
        <div className="sidebar">
          <div className="sidebar_in">
            <form className="sidebar_input" onSubmit={SubmitHandler}>
              <button style={{backgroundColor: "transparent", border: "none"}}><MdOutlineSearch size={22} color={"#e7760c"}/></button>
              <input value={Search} className="input" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
            </form>

            <div className="sidebar_hedding">Explore</div>
            <button onClick={() => setSearchedText("Gaming")} className="sidebar_text" >Gaming</button>
            <button onClick={() => setSearchedText("Misic")} className="sidebar_text" >Music</button>
            <button onClick={() => setSearchedText("Coding")} className="sidebar_text" >Coding</button>
            <button onClick={() => setSearchedText("Movies")} className="sidebar_text" >Movies</button>
            <button onClick={() => setSearchedText("Stand Up")} className="sidebar_text" >Stand Up</button>

            <div className="sidebar_hedding">Top Search</div>
            <button onClick={() => setSearchedText("Cricket")} className="sidebar_text" >Cricket</button>
            <button onClick={() => setSearchedText("React tutorial")} className="sidebar_text" >React tutorial</button>
            <button onClick={() => setSearchedText("Avatar 2 trailer")} className="sidebar_text" >Avatar 2 trailer</button>
            <button onClick={() => setSearchedText("Valorent")} className="sidebar_text" >Valorent</button>
            <button onClick={() => setSearchedText("Fifa World cup")} className="sidebar_text" >Fifa World cup</button>
          </div>
        </div>
        <div className="content">
          <div className="content_main">
            {videos.map((items, index) => (
              <VideoCard items={items} key={index}/>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Feed