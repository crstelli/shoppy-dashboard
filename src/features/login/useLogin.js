import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

import { login } from "../../services/apiAuth";

function useLogin() {
  const navigate = useNavigate();

  const { mutate: handleLogin, isPending } = useMutation({
    mutationFn: ({ data }) => {
      const { email, password } = data;
      if (!email || !password) return;

      return login({ email, password });
    },
    onSuccess: () => {
      navigate("/dashboard");
      toast.success("Welcome, logged in successfully.");
    },

    onError: (error) => {
      toast.error(error.message);
    },

    onSettled: (_, __, { reset }) => {
      reset();
    },
  });

  return { handleLogin, isPending };
}

export { useLogin };
