// import { Link } from '@/components/ui/link';
// import { paths } from '@/config/paths';

const NotFoundRoute = () => {
  return (
    <div className="mt-52 flex flex-col items-center font-semibold">
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.x</p>
      {/* <Link to={paths.auth.candidateLogin.getHref()} replace>
        Go to Login
      </Link> */}
    </div>
  );
};

export default NotFoundRoute;
