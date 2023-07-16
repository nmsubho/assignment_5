import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useAppSelector } from "../redux/hooks";

interface ProtectedProps {
  children: ReactNode;
}

function Protected({ children }: ProtectedProps) {
  const { user } = useAppSelector((state) => state.user);

  if (!user?.uid) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default Protected;
