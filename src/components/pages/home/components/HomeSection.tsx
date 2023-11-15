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
    <section className="flex gap-8 my-12">
      <img
        src={item.imgSrc}
        alt={item.altText}
        className="w-40 h-40 object-contain rounded-full"
      />
      <div>
        <h3 className="m-0 text-xl text-homepage-h">{item.title}</h3>
        <p className="max-w-[60ch] my-8 text-l text-homepage-p">
          {item.description}
        </p>
      </div>
    </section>
  );
}
