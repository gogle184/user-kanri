import { useContext } from "react";
import { LoginUserContext } from "@/providers/LoginUserProviders";
import type { LoginUserContextType } from "@/providers/LoginUserProviders";

export const useLoginUser = (): LoginUserContextType => {
  const { loginUser, setLoginUser } = useContext(LoginUserContext);
  return { loginUser, setLoginUser };
};
