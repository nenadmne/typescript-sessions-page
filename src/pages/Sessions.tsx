import SessionsHeader from "../components/sessions/SessionsHeader.tsx";
import SessionList from "../components/sessions/SessionList.tsx";

export default function SessionsPage() {
  return (
    <main
      id="sessions-page"
      className="w-full lg:w-[80%] max-w-7xl mt-28 md:mt-20 lg:mt-24 mx-auto"
    >
      <SessionsHeader />
      <SessionList />
    </main>
  );
}
