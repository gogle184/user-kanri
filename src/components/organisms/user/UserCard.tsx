import { type FC, memo } from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react";

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClickUser: (id: number) => void;
};

export const UserCard: FC<Props> = memo((props) => {
  const { id, imageUrl, userName, fullName, onClickUser } = props;

  return (
    <Box
    w="260px"
    h="260px"
    bg="white"
    borderRadius="10px"
    shadow="md"
    p={4}
    _hover={{
      cursor: "pointer",
      opacity: 0.8,
    }}
    >
      <Stack textAlign="center" onClick={() => onClickUser(id)}>
        <Image
        borderRadius="full"
        boxSize="160px"
        m='auto'
        src={imageUrl}
        alt="random" />
        <Text fontSize="lg" fontWeight="bold" >{userName}</Text>
        <Text fontSize="sm" color="gray.500" >{fullName}</Text>
      </Stack>
    </Box>
  );
});
