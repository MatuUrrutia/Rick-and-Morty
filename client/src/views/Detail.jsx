import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./ViewStyles/Detail.module.css";

const Detail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState([]);

  useEffect(() => {

     //https://rickandmortyapi.com/api/character/${id}
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
    .then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div > 
       {Object.keys(character).length !== 0 ? (
        <div className={style.container}>
          <div>
            <h2 className={style.header}>{character.name}</h2>
            <img  className={style.charImg} src={character.image} alt="Imagen del personaje" />
          </div>
          <div className={style.body}>
            <h2>Status: {character.status}</h2>
            <h2>Especie: {character.species}</h2>
            <h2>Género: {character.gender}</h2>
            <h2>Origen: {character.origin.name}</h2>
          </div>
        </div>
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );
};

export default Detail;



