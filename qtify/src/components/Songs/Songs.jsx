import { useEffect, useState } from "react";
import axios from "axios";
import SongCard from "../SongCard/SongCard";
import styles from "./Songs.module.css";

const genres = ["All", "Rock", "Pop", "Jazz", "Blues"];

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [selected, setSelected] = useState("All");

  useEffect(() => {
    axios
      .get("https://qtify-backend.labs.crio.do/songs")
      .then((res) => setSongs(res.data));
  }, []);

  const filtered =
    selected === "All"
      ? songs
      : songs.filter((song) => song.genre === selected);

  return (
    <section className={styles.section}>
      <h3>Songs</h3>

      <div className={styles.tabs}>
        {genres.map((g) => (
          <button
            key={g}
            className={selected === g ? styles.active : ""}
            onClick={() => setSelected(g)}
          >
            {g}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((song) => (
          <SongCard
            key={song.id}
            image={song.image}
            title={song.title}
            likes={song.likes}
          />
        ))}
      </div>
    </section>
  );
};

export default Songs;
