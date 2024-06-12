import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Song } from './Song'
import { Album } from './Album'
import { SongList } from './SongList'
import { PlayList } from './PlayList'

function App() {
  const [songs, setSongs] = useState([
    { id: 101, title: "Varel Enq Momery", artist: " Hayko" },
    { id: 102, title: "Arajiny Aramn Er", artist: "Artash " },
    { id: 103, title: "la la la", artist: "Shakira" },
    { id: 104, title: "Diomond", artist: "Rihanna" },
  ]);

  const [playList, setPlayList] = useState([]);

  const removeSong = id => {
    setSongs(songs.filter(song => song.id !== id));
    setPlayList(playList.filter(song => song.id !== id));
  };

  const moveSong = id => {
    const songToMove = songs.find(song => song.id === id);
    if (songToMove && !playList.some(song => song.id === id)) {
      setPlayList([...playList, songToMove]);
    }
  };

  const moveDown = id => {
    const index = playList.findIndex(song => song.id === id);
    if (index >= 0 && index < playList.length - 1) {
      const newPlayList = [...playList]
      ;[newPlayList[index], newPlayList[index + 1]] = [newPlayList[index + 1], newPlayList[index]];
      setPlayList(newPlayList);
    }
  };

  return (
    <>
    <div className="container">
      <div className="list">
        <SongList items={songs} onDelete={removeSong} onMove={moveSong} />
      </div>
      <div className="list">
        <PlayList items={playList} onDelete={removeSong} onMoveDown={moveDown} />
      </div>
    </div>
  
    </>
  );
}

export default App;