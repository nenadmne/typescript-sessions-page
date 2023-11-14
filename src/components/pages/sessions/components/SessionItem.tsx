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
    <article className="flex flex-col bg-[#352e41] text-white rounded-md overflow-hidden shadow-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="flex flex-col p-4 justify-between">
        <div>
          <h3 className="mb-1 text-light-purple text-sm">{title}</h3>
          <p className="mb-1 text-lighter-purple text-base">{summary}</p>
        </div>
        <p className="mt-8 mb-4">
          <Link to={id}>Learn More</Link>
        </p>
      </div>
    </article>
  );
}
