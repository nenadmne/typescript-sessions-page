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
    <section className="flex flex-col sm:flex-row gap-4 sm:gap-8 my-8 sm:my-12">
      <img
        src={item.imgSrc}
        alt={item.altText}
        className="w-60 sm:w-40 h-60 sm:h-40 mx-auto sm:mx-0 object-contain rounded-full"
      />
      <div>
        <h3 className="m-0 text-xl text-center sm:text-left text-homepage-h">
          {item.title}
        </h3>
        <p className="max-w-[60ch] my-4 sm:my-8 text-l text-homepage-p">
          {item.description}
        </p>
      </div>
    </section>
  );
}
