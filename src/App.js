import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./Feed";
import Video from "./Video";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed/>} />
        <Route path="/video/:videoId" element={<Video/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
