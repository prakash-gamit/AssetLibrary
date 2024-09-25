import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError(); // eslint-disable-line

  return (
    <div
      id="error-page"
      className="h-screen w-screen flex flex-col justify-center items-center"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
