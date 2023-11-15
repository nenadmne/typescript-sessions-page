import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import UpcomingSessions from "../sessions/UpcomingSessions";

export default function MainHeader() {
  const [openModal, setOpenModal] = useState(false);

  const navLinks = [
    {
      to: "/",
      text: "Our Mission",
    },
    {
      to: "/sessions",
      text: "Browse Sessions",
    },
  ];

  const linkClass =
    "text-header-link pb-1 border-b-2 hover:border-header-link active:border-header-link";

  return (
    <>
      {openModal && <UpcomingSessions onClose={() => setOpenModal(false)} />}
      <header
        id="main-header"
        className="w-full sm:w-[80%] fixed top-0 left-0 max-w-7xl flex flex-col sm:flex-row justify-between items-center sm:my-8 sm:mx-auto p-[5%] sm:p-0 z-10"
      >
        <h1 className="mb-4 sm:m-0 text-xl wrap text-header-pink font-bold">
          ReactMentoring
        </h1>
        <nav className="w-full flex justify-end sm:justify-none flex-row gap-3 sm:gap-6">
          <ul className="list-none m-0 p-0 flex gap-3 sm:gap-6 items-center">
            {navLinks.map((link, index) => (
              <li key={index} className="text-sm sm:text-xl">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? `${linkClass} border-header-link`
                      : `${linkClass} border-transparent`
                  }
                  end={link.to === "/"}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button onClick={() => setOpenModal(true)}>Upcoming sessions</Button>
        </nav>
      </header>
    </>
  );
}
