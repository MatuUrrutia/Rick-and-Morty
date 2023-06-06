import style from "./Cards.module.css";

import Card from "../Card/Card";

export default function Cards(props) {
  const { characters, onClose } = props;

  return (
    <>
      <h1 className="tituloPag"> Rick and Morty </h1>
      <div className={style.container}>
        {characters.map((character) => (
          <Card key={character} character={character} onClose={onClose} />
        ))}
      </div>
    </>
  );
}
