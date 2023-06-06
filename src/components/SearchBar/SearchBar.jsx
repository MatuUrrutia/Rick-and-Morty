// import style from "./SearchBar.module.css"
// import { useState } from "react";

// export default function SearchBar({onSearch}) {

// const [id, setId] = useState("")

// const handleChange = (event) => {
//    setId(event.target.value)
// }


//    return (
//       <div className={style.container}>
         
//          <input 
//             type='search'
//             className={style.imputBox}
//             onChange={handleChange}    
//          />

//          <button 
//             className={style.Button} 
//             onClick={() => onSearch(id)}
//          >Agregar</button>

         
         
//       </div>
//    );
// }


//!____________________________________________

import style from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleRandomClick = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    onSearch(randomId.toString());
  };

  const handleAddClick = () => {
    onSearch(id);
  };

  return (
    <div className={style.container}>
     
      <button className={style.Button} onClick={handleRandomClick}>
        Add Random
      </button>

      <button className={style.Button} onClick={handleAddClick}>
        Add
      </button>

      <input
      type="search"
      className={style.inputBox}
      onChange={handleChange}
      />

    </div>
  );
}