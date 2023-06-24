import { useSelector, connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from '../../redux/actions'
import { useState } from 'react'
import style from "./Favorites.module.css";
 

const Favorites = ({onClose}) => {
  const favorites = useSelector((state) => state.myFavorites);

  const dispatch = useDispatch()
  const [aux, setAux] = useState(false)

  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true)
  };
  
  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <select className={style.selctorIzq} onChange={handlerOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select className={style.selctorDer} onChange={handlerFilter}>
        <option value="AllCharacters">AllCharacters</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>

      <div className={style.container}>
      {favorites.map((character) => (
        <Card
          key={character.id}
          character={character}
          // id={character.id}
          // name={character.name}
          // specie={character.specie}
          // gender={character.gender}
          // image={character.image}
          onClose={onClose}
        />
      ))}
      </div>
    </div>
  );
};

export default Favorites;
