
export const Song = ({ title, artist, duration = 8, id, onDelete, onMove, inPlaylist, onMoveDown }) => {
    return (
      <div className="song">
        <p>{title}</p>
        <strong>by {artist}</strong>
        <small>{duration} mins</small>
        <button onClick={() => onDelete(id)}>Delete</button>
        {!inPlaylist && <button onClick={() => onMove(id)}>Move</button>}
        {inPlaylist && <button onClick={() => onMoveDown(id)}>Move Down</button>}
      </div>
    );
  };
  