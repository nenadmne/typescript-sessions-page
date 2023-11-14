import SessionsHeader from "./components/SessionsHeader.tsx";
import SessionList from "./components/SessionList.tsx";

export default function SessionsPage() {
  return (
    <main id="sessions-page" className="w-[80%] max-w-7xl my-12 mx-auto">
      <SessionsHeader />
      <SessionList />
    </main>
  );
}
