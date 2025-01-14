import { type FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { HomeRoutes } from "./HomeRoutes";
export const Router: FC = memo(() => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/home/*">
				{HomeRoutes.map((route) => (
					<Route key={route.path} path={route.path} element={route.element} />
				))}
			</Route>
			<Route path="*" element={<Page404 />} />
		</Routes>
	);
});
