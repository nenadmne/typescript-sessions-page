import { Outlet } from "react-router-dom";
import MainHeader from "../navigation/MainHeader";

export default function Root() {
  return (
    <>
      {/* Todo: Add Header */}
      <MainHeader />
      <Outlet />
    </>
  );
}
