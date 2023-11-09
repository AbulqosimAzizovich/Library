import "./style.scss";

const Card = ({ title, author, pages, published, cover }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{cover}</p>

      <div className="about__card">
        <p>
          {author}: {published}-year
        </p>
        <span>{pages} pages</span>
      </div>
    </div>
  );
};

export default Card;
