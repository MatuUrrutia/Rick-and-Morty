import { ADD_FAV, FILTER, REMOVE_FAV, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return { ...state, 
        myFavorites: [...state.allCharactersFav, action.payload],
        allCharactersFav: [...state.allCharactersFav, action.payload],
        
      }; //!  "ADD_FAV" en el que puedas agregar a un personaje que recibes por payload a tu estado "myFavorites".  

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload    //! "REMOVE_FAV" puede eliminar a un personaje de tu estado "myFavorites" a partir de un id que recibas por payload.
        ),
      }; 

      case FILTER:  
      const allCharactersFiltered = state.allCharactersFav.filter (
        (character) => character.gender === action.payload 
        )

        return {
          ...state, 
          myFavorites: 
            action.payload === "AllCharacters"
              ? [...state.allCharactersFav]
              : allCharactersFiltered
        }

        case ORDER:
          const allCharactersFavCopy = [...state.allCharactersFav]
          return {
            ...state,
            myFavorites:
              action.payload  === 'A'
              ? allCharactersFavCopy.sort((a,b) => a.id - b.id)
              : allCharactersFavCopy.sort((a,b) => b.id - a.id )

          }


    default:
      return {...state};
  }
};

export default rootReducer;
