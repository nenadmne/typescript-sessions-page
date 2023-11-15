import Button from "../UI/Button.tsx";

type UpcomingSessionProps = {
  session: {
    id: string;
    title: string;
    summary: string;
    date: string;
  };
  onCancel: () => void;
};

export default function UpcomingSession({
  session,
  onCancel,
}: UpcomingSessionProps) {
  
  return (
    <article className="flex justify-between my-4 bg-grey rounded-md">
      <div className="p-4">
        <h3 className="text-homepage-h font-bold">{session.title}</h3>
        <p className="text-homepage-p my-2">{session.summary}</p>
        <time
          dateTime={new Date(session.date).toISOString()}
          className="text-base text-session-time"
        >
          {new Date(session.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </time>
      </div>
      <p className="p-2">
        <Button textOnly onClick={onCancel}>
          Cancel
        </Button>
      </p>
    </article>
  );
}
