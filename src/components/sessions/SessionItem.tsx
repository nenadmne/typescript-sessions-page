import Button from "../UI/Button";

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
      <div className="flex flex-col p-4 justify-between min-h-[180px]">
        <div>
          <h3 className="mb-2 text-light-purple text-sm">{title}</h3>
          <p className="text-lighter-purple text-base">{summary}</p>
        </div>
        <p className="flex justify-end whitespace-nowrap">
          <Button to={id}>Learn More</Button>
        </p>
      </div>
    </article>
  );
}
