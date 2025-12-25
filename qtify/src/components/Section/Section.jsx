import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Section.module.css";

const Section = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://qtify-backend.labs.crio.do/albums/top")
      .then((res) => setAlbums(res.data));
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3>Top Albums</h3>
        <button className={styles.collapse}>Collapse</button>
      </div>

      <div className={styles.grid}>
        {albums.map((album) => (
          <Card
            key={album.id}
            image={album.image}
            title={album.title}
            follows={album.follows}
          />
        ))}
      </div>
    </section>
  );
};

export default Section;
