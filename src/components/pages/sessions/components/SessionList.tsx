import { SESSIONS } from "../../../../dummy-sessions.ts"; // normally, we would probably load that from a server
import SessionItem from "./SessionItem.tsx";

export type SessionListItem = {
  id: string;
  title: string;
  summary: string;
  description: string;
  duration: number;
  date: string;
  image: string;
};

type SessionListProps = SessionListItem[];

export default function SessionList() {
  const sessions: SessionListProps = SESSIONS;
  return (
    <ul id="sessions-list">
      {sessions.map((item) => (
        <li key={item.id}>
          <SessionItem item={item} />
        </li>
      ))}
    </ul>
  );
}
