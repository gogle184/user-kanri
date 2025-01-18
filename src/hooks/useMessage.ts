import { useCallback } from "react";
import { toaster } from "@/components/ui/toaster";

type Props = {
  title: string;
  type: "success" | "error" | "info";
};

export const useMessage = () => {
  const showMessage = useCallback((props: Props) => {
    const { title, type } = props;
    toaster.create({
      title,
      duration: 2000,
      type: type,
      meta: { closable: true },
    });
  }, []);

  return { showMessage };
};
