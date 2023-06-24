import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card(props) {
  const { character, onClose, addFav, removeFav, myFavorites} = props;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
   if (isFav) {
     setIsFav(false);
     removeFav(character.id);
   } else {
     setIsFav(true);
     addFav(character);
   }
 };


   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);



  return (
    <div className={style.cardFormatShadow}>

      <div className={style.cardHeader}>
        <Link to={`/detail/${character.id}`}>
          <h2>{character.name} </h2>
        </Link>
      </div>

      <div className={style.cardImage}>
        <img src={character.image} alt="Imagen del personaje" />
      </div>

      {/* <div className={style.cardBody}> */}
            {/* <h2>Status: {character.status}</h2> */}
            {/* <h2>Especie: {character.species} </h2> */}
            {/* <h2>Género: {character.gender} </h2> */}
            {/* <h2>Origen: {character.origin.name}</h2> */}
         {/* </div> */}

      <div className={style.cardFooter}>
        <button className={style.Botton} onClick={() => onClose(character.id)}>
          X
        </button>
      {isFav ? (
        <button className={style.heart} onClick={handleFavorite}>❤️</button>
      ) : (
        <button className={style.heart} onClick={handleFavorite}>🤍</button>
      )}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    }, //! importante pasarle los parametros por argumentos que se especifican en las actions
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);


