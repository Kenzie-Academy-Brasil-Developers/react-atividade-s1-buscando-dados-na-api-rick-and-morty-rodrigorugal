import CharCard from "../CharCard";
import "./style.css";
const Characters = ({ characters }) => {
  return (
    <div className="container">
      {characters.results &&
        characters.results.map((item) => (
          <CharCard key={item.id} item={item} />
        ))}
    </div>
  );
};

export default Characters;
