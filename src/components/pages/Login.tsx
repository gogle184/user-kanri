import { type FC, memo, useState, type ChangeEvent } from "react";
import {
	Flex,
	Box,
	Heading,
	Separator,
	Input,
	Stack,
} from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { useAuth } from "../../hooks/useAuth";
export const Login: FC = memo(() => {
  const { login, loading } = useAuth();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const onClickLogin = () => login(userId);

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

	return (
		<Flex align="center" justify="center" height="100vh">
			<Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
				<Heading as="h1" size="lg" textAlign="center">ログイン</Heading>
				<Separator my={4} />
				<Stack
					direction="column"
					gap={4}
					py={4}
					px={10}
				>
					<Input placeholder="ユーザー ID" value={userId} onChange={onChangeUserId} />
					<Input placeholder="パスワード" value={password} onChange={onChangePassword} />
          <PrimaryButton onClick={onClickLogin} loading={loading} disabled={userId === ""}>ログイン</PrimaryButton>
				</Stack>
			</Box>
		</Flex>
	);
});
