import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./views/About.jsx";
import Favorites from "./components/Favorites/Favorites";
import Detail from "./views/Detail.jsx";
import ErrorPage from "./views/error/ErrorPage";
import axios from "axios";
import { useEffect, useState } from "react";
import LoginForm from "./components/Forms/LoginForm";
import { useLocation } from "react-router-dom";

function App() {
  //? HOOKS

  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  
  const login = (userData) => {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`)
    .then(({ data }) => {
      const { access } = data;
      setAccess(access);
       access && navigate('/home');
    });
 }

 useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);
  
    //? CREDENCIALES FAKE
    
    
    //? EVENT HANDLERS
  
    const onSearch = (id) => {

    
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (characters.find((char) => char.id === data.id)) {
          window.alert("Ya agregaste a este personaje");
        } else if (
          data.name &&
          !characters.find((char) => char.id === data.id)
        ) {
          setCharacters((oldChars) => [...oldChars, data]);
          // setCharacters([...characters, data]); HACE LO MISMO
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  
  //? RENDER
  
  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} setAccess={setAccess} />}

      <Routes>
        <Route path="/" element={<LoginForm login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
          />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites onClose={onClose}  />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;


//! FUNCIONES REMPLAZADAS POR EL BACKEND

/*const login = (userData) => {
  if (userData.username === username && userData.password === password) {
    setAccess(true);
    navigate("/home");
  } else {
    alert("Credenciales inocrrectas");
  }
};

const username = "matu.urrutia.dt@gmail.com";
const password = "mipass123";


const onSearch = (id) => {
    // const URL_BASE = "https://rickandmortyapi.com/api"
    // const API_KEY = "12EYE127Y12EVC821"
    // fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
    // "https://rickandmortyapi.com/api/character/${id}"

*/