/* eslint-disable react/react-in-jsx-scope */
import {
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import GeneralLayout from '../../layouts/GeneralLayout/GeneralLayout';
import AdminPage from '../../pages/AdminPage/AdminPage';

function App() {
  const routes = createRoutesFromElements(
    <Route path="/">
      <Route element={<GeneralLayout />}>
	  <Route path="admin" element={<AdminPage />} />
      </Route>
    </Route>
  );

  const router = createHashRouter(routes);

  return (
      < >
        <RouterProvider router={router} />
      </>
  );
}

export default App;
