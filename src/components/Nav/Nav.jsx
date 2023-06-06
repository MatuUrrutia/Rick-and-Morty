import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav(props) {
  const { onSearch, setAccess} = props;

  const handleLogOut = () => {
    setAccess(false);
  }

  return (
    <div className={style.container}>
      
      <div className={style.space}>
      <Link to="/home">
        <button className={style.Button} >Home</button>
      </Link>
      </div>


      <div className={style.space}>
      <Link to="/about">
        <button className={style.Button}>About</button>
      </Link>
      </div>

      <div className={style.space}>
      <SearchBar  onSearch={onSearch}  />
      </div>

      <button className={style.Button} onClick={handleLogOut}>Log Out</button>

    </div>
  );
}

{
  /* <NavLink 
                to='/Home'
                className={({isActive}) => (isActive ? "-styleNav.active-"  : "-styleNav.disable-")}
                ></NavLink> */
}

{
  /* <button className={"-styles.buttonBack-"} onClick={"-backToHome-"}>
                About
                </button>     */
}

// //?______________________________________

// class Nav extends React.Component{
//     constructor(props){
//         super(props);
//     }

//     render(){
//         return(
//             <div className={style.container}>
//                 <SearchBar onSearch={this.props.onSearch}/>

//             </div>

//         )
//     }

// }

// export default Nav
