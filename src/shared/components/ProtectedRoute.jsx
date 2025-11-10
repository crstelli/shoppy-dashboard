import { Navigate } from "react-router";

import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";

import { Spinner } from "./Spinner";

function ProtectedRoute({ children }) {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  if (isLoading)
    return (
      <span className="-transalte-x-1/2 absolute top-1/2 left-1/2 -translate-y-1/2">
        <Spinner size="size-15" />
      </span>
    );

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}

export { ProtectedRoute };
