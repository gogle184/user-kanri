import { type FC, memo } from "react";
import { Flex, Heading, Box, Link, IconButton, DrawerRoot, DrawerBackdrop, DrawerContent, DrawerBody, Button, useDisclosure, DrawerTrigger } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

export const Header: FC = memo(() => {
	return (
		<>
			<DrawerRoot placement="start">
				<Flex
					as="nav"
					bg="teal.500"
					color="gray.50"
					align="center"
					justify="space-between"
					padding={{ base: 3, md: 5 }}
				>
					<Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
						<Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
							ユーザー管理アプリ
						</Heading>
					</Flex>
					<Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
						<Box pr={4}>
							<Link>ユーザー一覧</Link>
						</Box>
						<Link>設定</Link>
					</Flex>
					<DrawerTrigger>
						<IconButton
							aria-label="メニューボタン"
							size="sm"
							variant="ghost"
							display={{ base: "block", md: "none" }}
						>
							<RxHamburgerMenu />
						</IconButton>
					</DrawerTrigger>
				</Flex>
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
						>
							TOP
						</Button>
						<Button
							variant="ghost"
							color="white"
							_hover={{ bg: "teal.600" }}
							h="60px"
							fontSize="lg"
						>
							ユーザー一覧
						</Button>
						<Button
							variant="ghost"
							color="white"
							_hover={{ bg: "teal.600" }}
							h="60px"
							fontSize="lg"
						>
							設定
						</Button>
					</DrawerBody>
				</DrawerContent>
			</DrawerRoot>
		</>
	);
});
