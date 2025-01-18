import { type FC, memo, type ReactNode } from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react";

type Props = {
  imageUrl: string;
  userName: string;
  fullName: string;
};

export const UserCard: FC<Props> = memo((props) => {
  const { imageUrl, userName, fullName } = props;
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
      <Stack textAlign="center" >
        <Image
        borderRadius="full"
        boxSize="160px"
        m='auto'
        src={imageUrl}
        alt={userName} />
        <Text fontSize="lg" fontWeight="bold" >{userName}</Text>
        <Text fontSize="sm" color="gray.500" >{fullName}</Text>
      </Stack>
    </Box>
  );
});
