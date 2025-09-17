import { useState } from "react";
import { LinkedList } from "../listas/LinkedList";

const LinkedListPage = () => {
  const [songs] = useState(() => {
    const list = new LinkedList();
    list.append("Cancion 1 - Avenged Sevenfold - hail to the king");
    list.append("Cancion 2 - Linkin Park - numb");
    list.append("Cancion 3 - The Vanished People - soul vacation");
    list.append("Cancion 4 - Ed Sheeran - shape of you");
    list.append("Cancion 5 - queen - bohemian rhapsody");
    list.append("Cancion 6 - michael jackson - billie jean");
    return list;
  });

  const [currentSong, setCurrentSong] = useState(songs.head);

  const nextSong = () => {
    if (currentSong?.next) {
      setCurrentSong(currentSong.next);
    }
  };

  return (
    <div>
      <h2>🎵 Linked List - Playlist</h2>
      <p>Reproduciendo: {currentSong?.value}</p>
      <button onClick={nextSong}>Siguiente</button>
    </div>
  );
};

export default LinkedListPage;
