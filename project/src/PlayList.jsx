
  import { Song } from "./Song.jsx";

export const PlayList = ({ items, onDelete, onMoveDown }) => {
  return (
    <div>
      <h1> Playlist: {items.length}</h1>
      {items.map((elm, index) => (
        <Song key={elm.id} {...elm} inPlaylist={true} onDelete={onDelete} onMoveDown={onMoveDown} />
      ))}
    </div>
  );
};
