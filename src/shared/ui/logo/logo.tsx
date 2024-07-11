import logoUrl from "@/assets/logo.svg";
import { Link } from "react-router-dom";

export const Logo = () => (
  <Link to="/">
    <img src={logoUrl} alt="logo" width={110} height={16} />
  </Link>
);
