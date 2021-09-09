import "./style.css";

const CharCard = ({ item: { name, image, status } }) => {
  return (
    <div className="box" className={status}>
      <label>{name}</label>
      <img className="img_style" src={image} alt={name} />
    </div>
  );
};

export default CharCard;
