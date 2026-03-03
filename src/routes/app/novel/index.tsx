import { Outlet, ScrollRestoration } from 'react-router';


const CandidateRoutes = () => {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default CandidateRoutes;
