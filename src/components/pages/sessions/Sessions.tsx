import SessionsHeader from "./components/SessionsHeader.tsx";
import SessionList from "./components/SessionList.tsx";

export default function SessionsPage() {
  return (
    <main id="sessions-page">
      <SessionsHeader />
      <SessionList />
    </main>
  );
}
