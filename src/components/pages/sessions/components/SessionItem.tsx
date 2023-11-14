import { Link } from "react-router-dom";

type SessionItemProps = {
  item: {
    title: string;
    image: string;
    summary: string;
    id: string;
  };
};

export default function SessionItem({ item }: SessionItemProps) {
  const { image, title, summary, id } = item;
  return (
    <article className="session-item">
      <img src={image} alt={title} />
      <div className="session-data">
        <div>
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>
        <p className="actions">
          <Link to={id}>Learn More</Link>
        </p>
      </div>
    </article>
  );
}
