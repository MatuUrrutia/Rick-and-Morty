import AboutText from "../components/AboutText/AboutText.jsx";
import style from "./ViewStyles/About.module.css";
import AboutImg from "../assets/img/RickandMortyAbout.jpg";

const About = () => {
  return (
    <div className={style.container}>
      <div>
        <h1 className={style.name}> Matias Urrutia de Teran </h1>
        <img className={style.aboutImg} src={AboutImg} alt="Imagen del desarrollador" />
      </div>
      <div>
        <AboutText></AboutText>
      </div>
    </div>
  );
};

export default About;
