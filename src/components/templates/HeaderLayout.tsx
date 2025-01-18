import { type FC, memo, type ReactNode } from "react";
import { Header } from "../organisms/layout/header";

type Props = {
	children: ReactNode;
};

export const HeaderLayout: FC<Props> = memo((props) => {
	const { children } = props;
	return (
		<div style={{ textAlign: "left", padding: "20px" }}>
			<Header />
			{children}
		</div>
	);
});
