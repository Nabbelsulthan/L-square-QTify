import headphones from "../../assets/headphones.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>100 Thousand Songs, ad-free</h1>
        <h2>Over thousands podcast episodes</h2>
      </div>
      <img src={headphones} alt="Headphones" />
    </section>

  );
};

export default Hero;
