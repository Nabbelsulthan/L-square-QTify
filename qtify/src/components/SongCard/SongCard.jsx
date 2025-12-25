import { Chip } from "@mui/material";
import styles from "./SongCard.module.css";

const SongCard = ({ image, title, likes }) => {
  return (
    <div className={styles.card} data-testid="song-card">
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.cardFooter}>
        <Chip label={`${likes} Likes`} size="small" />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default SongCard;
