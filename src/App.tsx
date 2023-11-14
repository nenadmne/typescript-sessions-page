import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './components/pages/home/Home.tsx';
import SessionsPage from './components/pages/sessions/Sessions.tsx';
import SessionPage from './components/pages/Session.tsx';
import Root from './components/pages/Root.tsx';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: 'sessions', element: <SessionsPage /> },
      { path: 'sessions/:id', element: <SessionPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
