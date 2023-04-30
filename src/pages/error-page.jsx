import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="absolute flex flex-col gap-10 text-3xl text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <h2>Oh dang! The page was not found.</h2>
      <Link className="underline uppercase" to="/">
        Jump back
      </Link>
    </div>
  );
}
