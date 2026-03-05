import { createContext, useContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const GetUserData = () => {
    return axios.get("https://route-posts.routemisr.com/users/profile-data", {
      headers: { Token: localStorage.getItem("Token") },
    });
  };

  const { data, isLoading } = useQuery({
    queryKey: ["GetUserData"],
    queryFn: GetUserData,
  });

  useEffect(() => {
    if (data?.data?.data?.user) {
      setUser(data.data.data.user);
    }
  }, [data]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}