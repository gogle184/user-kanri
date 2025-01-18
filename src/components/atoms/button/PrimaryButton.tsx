import { type FC, memo, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, disabled = false, loading = false, onClick } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      size="md"
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
      disabled={disabled || loading}
      loading={loading}
    >
      {children}
    </Button>
  );
});
