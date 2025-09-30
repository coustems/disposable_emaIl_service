import { useNavigate } from "react-router-dom";
import "./Cards.css";

const cardData = [
  {
    name: "NF",
    color: "card-red",
    img: "/images/netmirror.jpg",
  },
  {
    name: "Crunchy",
    color: "card-orange",
    img: "/images/crunchyroll.png",
  },
  {
    name: "YT Premium",
    color: "card-red2",
    img: "/images/youtube.png",
  },
  {
    name: "Prime",
    color: "card-blue",
    img: "/images/prime2.png",
  },
];

const Cards = () => {
  const navigate = useNavigate();

  const handleCardClick = (name: string | number | boolean, color: string) => {
    navigate(`/${encodeURIComponent(name)}/verification`, {
      state: { bgColor: color },
    });
  };

  return (
    <div className="cards-bg">
      <div className="cards-container">
        <h1 className="cards-title">Choose a Service</h1>

        <div className="cards-grid">
          {cardData.map((card) => (
            <div
              key={card.name}
              className={`card ${card.color}`}
              onClick={() => handleCardClick(card.name, card.color)}
            >
              <div className="card-img-wrapper">
                <img src={card.img} alt={card.name} className="card-img" />
              </div>
              <div className="card-label">
                <span>{card.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
