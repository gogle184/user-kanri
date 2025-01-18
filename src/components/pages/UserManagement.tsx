import { type FC, memo, useEffect } from "react";
import { HStack, Flex, Spinner, Center } from "@chakra-ui/react";
import { UserCard } from "@/components/organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: FC = memo(() => {
	const { getAllUsers, loading, users } = useAllUsers();
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		getAllUsers();
	}, []);

	return (
    <>
    {loading ? <Center h="100vh"><Spinner /></Center> : (
      <HStack wrap="wrap" p={{ base: 4, md: 10 }} >
          {users.map((user)=>(
          <Flex key={user.id} mx="auto">
          <UserCard
          imageUrl="https://picsum.photos/160"
          userName={user.username}
          fullName={user.name} />
          </Flex>
          ))}
      </HStack>
    )}
    </>
	);
});
