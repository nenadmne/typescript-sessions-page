import { useParams } from "react-router-dom";
import { SESSIONS } from "../../dummy-sessions.ts";

export default function SessionPage() {
  const params = useParams<{ id: string }>();

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  if (!loadedSession) {
    return (
      <main className="w-[80%] max-w-60rem my-12 mx-auto">
        <p>No session found!</p>
      </main>
    );
  }

  return (
    <main className="w-[80%] max-w-60rem my-12 mx-auto">
      <article>
        <header className="flex gap-6">
          <img
            src={loadedSession.image}
            alt={loadedSession.title}
            className="w-[30rem] h-80 object-cover rounded-lg mb-8"
          />
          <div>
            <h2 className="mb-2 text-xxl text-session-header">
              {loadedSession.title}
            </h2>
            <time
              dateTime={new Date(loadedSession.date).toISOString()}
              className="text-base text-session-time"
            >
              {new Date(loadedSession.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
            <p>
              <button> Book Session </button>
            </p>
          </div>
        </header>
        <p className="max-w-[60rem] my-8 mx-auto p-4 bg-grey rounded-lg shadow-shadow text-session-header text-l whitespace-pre-wrap animate-slide-down">
          {loadedSession.description}
        </p>
      </article>
    </main>
  );
}
