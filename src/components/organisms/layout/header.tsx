import {
	Box,
	DrawerRoot,
	DrawerTrigger,
	Flex,
	Heading,
	Link,
	useDisclosure,
} from "@chakra-ui/react";
import { type FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: FC = memo(() => {
	const navigate = useNavigate();
	const { open, onOpen, onClose } = useDisclosure();

	const onClickHome = () => navigate("/home");
	const onClickUserManagement = () => navigate("/home/user_management");
	const onClickSetting = () => navigate("/home/setting");

	return (
		<>
			<DrawerRoot placement="start" open={open}>
				<Flex
					as="nav"
					bg="teal.500"
					color="gray.50"
					align="center"
					justify="space-between"
					padding={{ base: 3, md: 5 }}
				>
					<Flex
						align="center"
						as="a"
						mr={8}
						_hover={{ cursor: "pointer" }}
						onClick={() => {
							navigate("/home");
						}}
					>
						<Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
							ユーザー管理アプリ
						</Heading>
					</Flex>
					<Flex
						align="center"
						fontSize="sm"
						flexGrow={2}
						display={{ base: "none", md: "flex" }}
					>
						<Box pr={4}>
							<Link
								onClick={() => {
									navigate("/home/user_management");
								}}
							>
								ユーザー一覧
							</Link>
						</Box>
						<Link
							onClick={() => {
								navigate("/home/setting");
							}}
						>
							設定
						</Link>
					</Flex>
					<DrawerTrigger>
						<MenuIconButton onClick={onOpen} />
					</DrawerTrigger>
				</Flex>
				<MenuDrawer
					onClickHome={onClickHome}
					onClickUserManagement={onClickUserManagement}
					onClickSetting={onClickSetting}
					onClose={onClose}
				/>
			</DrawerRoot>
		</>
	);
});
