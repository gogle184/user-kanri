import { type FC, memo } from "react";
import { HStack, Flex} from "@chakra-ui/react";
import { UserCard } from "@/components/organisms/user/UserCard";

export const UserManagement: FC = memo(() => {
	return (
		<HStack wrap="wrap" p={{ base: 4, md: 10 }}>
				<Flex>
          <UserCard
          imageUrl="https://picsum.photos/160"
          userName="げんげん"
          fullName="佐藤" />
        </Flex>
		</HStack>
	);
});
