import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Section.module.css";

const Section = ({ title, endpoint }) => {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(title === "Top Albums");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios.get(endpoint).then((res) => setAlbums(res.data));
  }, [endpoint]);

  const handleNext = () => {
    setIndex((prev) => prev + 2);
  };

  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 2, 0));
  };

  return (
    <section
      className={styles.section}
      data-testid={`${title.toLowerCase().replace(" ", "-")}-section`}
    >
      <div className={styles.header}>
        <h3>{title}</h3>
        <button
          className={styles.toggle}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Collapse" : "Show all"}
        </button>
      </div>

      {!showAll && (
        <div className={styles.controls}>
          <button data-testid="prev-btn" onClick={handlePrev}>
            {"<"}
          </button>
          <button data-testid="next-btn" onClick={handleNext}>
            {">"}
          </button>
        </div>
      )}

      <div className={showAll ? styles.grid : styles.slider}>
        {albums.map((album) => (
          <div
            key={album.id}
            style={{
              transform: showAll
                ? "translateX(0)"
                : `translateX(-${index * 180}px)`,
              transition: "transform 0.3s ease",
            }}
          >
            <Card
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;
