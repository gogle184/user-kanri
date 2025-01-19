import { type FC, memo, useEffect, useCallback } from "react";
import { HStack, Flex, Spinner, Center } from "@chakra-ui/react";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

import { DialogRoot, DialogTrigger } from "@/components/ui/dialog";
import { UserCard } from "@/components/organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "@/hooks/useSelectUser";
import { useLoginUser } from "@/hooks/useLoginUser";

export const UserManagement: FC = memo(() => {
	const { getAllUsers, loading, users } = useAllUsers();
  const { loginUser } = useLoginUser();
  const { selectedUser, onSelectUser } = useSelectUser();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		getAllUsers();
	}, []);

  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id, users });
  }, [users, onSelectUser]);

	return (
    <DialogRoot>
      <DialogTrigger asChild>
        {loading ? <Center h="100vh"><Spinner /></Center> : (
          <HStack wrap="wrap" p={{ base: 4, md: 10 }} >
              {users.map((user)=>(
              <Flex key={user.id} mx="auto">
              <UserCard
              id={user.id}
              imageUrl="https://picsum.photos/160"
              userName={user.username}
              fullName={user.name}
              onClickUser={onClickUser} />
              </Flex>
              ))}
          </HStack>
        )}
      </DialogTrigger>
      <UserDetailModal user={selectedUser} isAdmin={loginUser?.isAdmin}/>
    </DialogRoot>
	);
});
