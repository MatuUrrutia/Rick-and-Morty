import style from "./Card.module.css"
import {Link} from "react-router-dom";

export default function Card(props) {

   const {character, onClose} = props
   return (
      <div className={style.cardFormatShadow} >
        
         <div className={style.cardHeader}>
            <Link  to={`/detail/${character.id}`}>
               <h2>{character.name} </h2>
            </Link>
         </div>

         <div className={style.cardImage}>
            <img src={character.image}  alt= "Imagen del personaje" />
         </div>

         {/* <div className={style.cardBody}>
            <h2>Status: {character.status}</h2>
            <h2>Especie: {character.species} </h2>
            <h2>Género: {character.gender} </h2>
            <h2>Origen: {character.origin.name}</h2>
         </div> */}

         <div className={style.cardFooter}>
            <button className={style.Botton} onClick={() => onClose(character.id)}>X</button>
         </div>
         
      </div>
   );
}
