import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import ErrorPage from './pages/Error';
import HelpPage from './pages/Help';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import ProjectsIndexPage from './pages/projects/index';
import ProjectPage from './pages/projects/project/index';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'projects/:projectId',
        element: <ProjectPage />,
      },
      {
        path: 'projects',
        element: <ProjectsIndexPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'help',
        element: <HelpPage />,
      },
      {
        path: '',
        element: <HomePage />,
      },
    ],
  },
]);
export default Router;
