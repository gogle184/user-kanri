import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
export const HomeRoutes = [
	{
		path: "",
		element: <Home />,
	},
	{
		path: "setting",
		element: <Setting />,
	},
	{
		path: "user_management",
		element: <UserManagement />,
	},
	{
		path: "page404",
		element: <Page404 />,
	},
];
