import { useState } from 'react';
import { Menu } from './Components/Menu';
import { videos } from './data/videos';
import { Video } from './Components/Video';
import './styles/styles.css'

function App() {

  const videoNames = Object.keys(videos);
  const [videoSrc, setVideoSrc] = useState(videos.spider);
  const onSelectedVideo = (video) => {
    const videoSrc = videos[video];
    setVideoSrc(videoSrc);
  }

  return (
    <div>
      <h1>Video Player</h1>
      <Menu onSelectedVideo={onSelectedVideo} videoValues={videoNames} />
      <Video videoSrc={videoSrc} />
    </div>
  )
}

export default App
