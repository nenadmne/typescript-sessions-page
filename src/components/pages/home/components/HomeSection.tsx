type HomeSectionProps = {
  item: {
    imgSrc: string;
    altText: string;
    title: string;
    description: string;
  };
};

export default function HomeSection({ item }: HomeSectionProps) {
  return (
    <section>
      <img src={item.imgSrc} alt={item.altText} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </section>
  );
}
