import { useEffect, useRef } from "react";

import Modal, { type ModalHandle } from "../UI/Modal.tsx";
import UpcomingSession from "./UpcomingSession.tsx";
import { useSessionsContext } from "../../store/sessions-context.tsx";
import Button from "../UI/Button.tsx";

type UpcomingSessionsProps = {
  onClose: () => void;
};

export default function UpcomingSessions({ onClose }: UpcomingSessionsProps) {
  const modal = useRef<ModalHandle>(null);
  const sessionsCtx = useSessionsContext();

  console.log(sessionsCtx);

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  function handleCancelSession(sessionId: string) {
    sessionsCtx.cancelSession(sessionId);
  }

  const hasSessions = sessionsCtx.upcomingSessions.length > 0;

  return (
    <Modal ref={modal} onClose={onClose}>
      <h2 className="m-0 text-l text-session-header font-bold">
        Upcoming Sessions
      </h2>
      {hasSessions && (
        <ul>
          {sessionsCtx.upcomingSessions.map((session) => (
            <li key={session.id}>
              <UpcomingSession
                session={session}
                onCancel={() => handleCancelSession(session.id)}
              />
            </li>
          ))}
        </ul>
      )}
      {!hasSessions && (
        <p className="my-8 mx-auto p-4 bg-grey text-base text-session-header rounded-lg shadow-shadow">
          No upcoming sessions.
        </p>
      )}
      <p>
        <Button onClick={onClose}>Close</Button>
      </p>
    </Modal>
  );
}
