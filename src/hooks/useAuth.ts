import { useCallback, useState } from "react";
import axios from "axios";
import type { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();
  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          // biome-ignore lint/complexity/noUselessTernary: <explanation>
          const isAdmin = res.data.id === 10 ? true : false;
          setLoginUser({ ...res.data, isAdmin });
          showMessage({ title: "ログインしました", type: "success" });
          navigate("/home");
        } else {
          showMessage({ title: "データが取得できませんでした。", type: "error" });
        }
      })
      .catch(() => {
        showMessage({ title: "ログインできません", type: "error" });
      })
      .finally(() => setLoading(false));
  }, [navigate, showMessage, setLoginUser]);

  return { login, loading };
};
