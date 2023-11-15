import { NavLink } from "react-router-dom";
import Button from "../UI/Button";

export default function MainHeader() {
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
      <header
        id="main-header"
        className="w-[80%] max-w-7xl flex justify-between items-center my-8 mx-auto"
      >
        <h1 className="m-0 text-xl text-header-pink">ReactMentoring</h1>
        <nav className="flex flex-row gap-6">
          <ul className="list-none m-0 p-0 flex gap-6 items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
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
          <Button> Upcoming sessions </Button>
        </nav>
      </header>
    </>
  );
}
