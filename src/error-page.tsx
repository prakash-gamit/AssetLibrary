import { Link } from "react-router-dom";

export default function ErrorPage() {
  // const error: any = useRouteError(); // eslint-disable-line

  return (
    <div
      id="error-page"
      className="h-screen w-screen flex flex-col justify-center items-center"
    >
      <h1 className="font-bold text-2xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {/* <p>
        <em>{error.statusText || error.message}</em>
      </p> */}
      <p>
        <Link to="/">Go Home</Link>
      </p>
    </div>
  );
}
