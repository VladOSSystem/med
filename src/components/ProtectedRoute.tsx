import { Navigate } from "react-router-dom";

export type ProtectedRouteProps = {
    isAuthenticated: boolean;
    authenticationPath: string;
    outlet: JSX.Element;
    roleRequired?: "ADMIN" | "USER" | "PUBLIC";
  };
  
  const useAuth = () => {
    let user: any
    const _user = localStorage.getItem("user")
    if (_user) {
      user = JSON.parse(_user)
      console.log("user", user)
    }
    if (user) {
      return {
        role: user.role,
      }
    } else {
      return {
        role: null,
      }
    }
  }
  
  export default function ProtectedRoute({isAuthenticated, authenticationPath, roleRequired, outlet}: ProtectedRouteProps) {
    const {role} = useAuth()
    if(isAuthenticated) {
      return roleRequired === "PUBLIC" ? (
        outlet
      ) : (
        roleRequired === role ? (
          outlet
        ) : (
          <Navigate to="/denied" />
        )
      )
    } else {
      return <Navigate to={{ pathname: authenticationPath }} />;
    }
  };