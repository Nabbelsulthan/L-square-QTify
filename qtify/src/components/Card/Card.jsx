import { Chip } from "@mui/material";
import styles from "./Card.module.css";

const Card = ({ image, title, follows }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
      </div>

      <div className={styles.cardFooter}>
        <Chip label={`${follows} Follows`} size="small" />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
