import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import LeftButton from "../NavButton/LeftButton";
import RightButton from "../NavButton/RightButton";
import styles from "./Section.module.css";

const Section = ({ title, endpoint }) => {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(title === "Top Albums");

  const prevId = `${title}-prev`;
  const nextId = `${title}-next`;

  useEffect(() => {
    axios.get(endpoint).then((res) => setAlbums(res.data));
  }, [endpoint]);

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
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>

      {showAll ? (
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
      ) : (
        <div className={styles.carouselRow}>
          <LeftButton id={prevId} />
          <Carousel
            items={albums}
            prevEl={`#${prevId}`}
            nextEl={`#${nextId}`}
            renderItem={(album) => (
              <Card
                image={album.image}
                title={album.title}
                follows={album.follows}
              />
            )}
          />
          <RightButton id={nextId} />
        </div>
      )}
    </section>
  );
};

export default Section;
