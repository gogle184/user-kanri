import {
	Button,
	DrawerBackdrop,
	DrawerBody,
	DrawerContent,
} from "@chakra-ui/react";
import { type FC, memo } from "react";

type Props = {
	onClickHome: () => void;
	onClickUserManagement: () => void;
	onClickSetting: () => void;
	onClose: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
	const { onClickHome, onClickUserManagement, onClickSetting, onClose } = props;

	const onClickHomeAndClose = () => {
		onClickHome();
		onClose();
	};

	const onClickUserManagementAndClose = () => {
		onClickUserManagement();
		onClose();
	};

	const onClickSettingAndClose = () => {
		onClickSetting();
		onClose();
	};

	return (
		<>
			<DrawerBackdrop bg="blackAlpha.700" />
			<DrawerContent
				position="fixed"
				top="0"
				left="0"
				w="100%"
				h="100vh"
				bg="teal.500"
				color="white"
				display="flex"
				flexDirection="column"
				justifyContent="center"
			>
				<DrawerBody p={0} display="flex" flexDirection="column" gap={4}>
					<Button
						variant="ghost"
						color="white"
						_hover={{ bg: "teal.600" }}
						h="60px"
						fontSize="lg"
						onClick={onClickHomeAndClose}
					>
						TOP
					</Button>
					<Button
						variant="ghost"
						color="white"
						_hover={{ bg: "teal.600" }}
						h="60px"
						fontSize="lg"
						onClick={onClickUserManagementAndClose}
					>
						ユーザー一覧
					</Button>
					<Button
						variant="ghost"
						color="white"
						_hover={{ bg: "teal.600" }}
						h="60px"
						fontSize="lg"
						onClick={onClickSettingAndClose}
					>
						設定
					</Button>
				</DrawerBody>
			</DrawerContent>
		</>
	);
});
