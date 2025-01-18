import { IconButton } from "@chakra-ui/react";
import { type FC, memo } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

type Props = {
	onClick?: () => void;
};

export const MenuIconButton: FC<Props> = memo((props) => {
	const { onClick } = props;

	return (
		<IconButton
			aria-label="メニューボタン"
			size="sm"
			variant="ghost"
			display={{ base: "block", md: "none" }}
			onClick={onClick}
		>
			<RxHamburgerMenu />
		</IconButton>
	);
});
