export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'

export const addFav = (character) => {
  return { type: ADD_FAV, payload: character }; //!esta función recibe un personaje por parámetro. Deberás retornar una action con el type igual a "ADD_FAV", y el payload igual a ese personaje.
};

export const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id }; //! esta función recibe un id por parámetro. Deberás retornar una action con el type igual a "REMOVE_FAV", y el payload igual a ese id.
};


export const filterCards = (gender) => {
  return {type: FILTER, payload: gender}
}

export const orderCards = (order) => {
  return {type: ORDER, payload: order}
}