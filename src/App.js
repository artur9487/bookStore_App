/** @format */

import './App.css';
import MainView from './MainView';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BreadCrumb from './BreadCrumb';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainView />,
		children: [
			{
				path: '/:author',
				element: <BreadCrumb />
			}
		]
	}
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
