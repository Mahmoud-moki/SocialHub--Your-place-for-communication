import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeroUIProvider } from "@heroui/react";

import Login from "./assets/login/Login";
import SignUp from "./assets/SignUp/SignUp";
import Home from "./assets/Home/Home";
import Profile from "./assets/Profile/Profile";
import SavedPosts from "./assets/SavedPosts/SavedPosts";
import Friends from "./assets/Friends/Friends";
import Events from "./assets/Events/Events";
import Settings from "./assets/Settings/Settings";

import { UserProvider } from "./assets/context/UserData";
import AuthContextProvider, { ProtectedRoute } from "./assets/context/Auth";
import { PublicRoute } from "./assets/context/PublicRoute";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  [
    { path: "/", element: <PublicRoute><Login /></PublicRoute> },
    { path: "/login", element: <PublicRoute><Login /></PublicRoute> },
    { path: "/signup", element: <PublicRoute><SignUp /></PublicRoute> },
    {
      path: "/home",
      element: (
        <ProtectedRoute><UserProvider><Home /></UserProvider></ProtectedRoute>
      ),
    },
    {
      path: "/profile",
      element: (
        <ProtectedRoute><UserProvider><Profile /></UserProvider>
        </ProtectedRoute>
      ),
    },
    {
      path: "/savedposts",
      element: (
        <ProtectedRoute><UserProvider><SavedPosts /></UserProvider>
        </ProtectedRoute>
      ),
    },
    {
      path: "/friends",
      element: (
        <ProtectedRoute><UserProvider><Friends /></UserProvider>
        </ProtectedRoute>
      ),
    },
    {
      path: "/events",
      element: (
        <ProtectedRoute><UserProvider><Events /></UserProvider>
        </ProtectedRoute>
      ),
    },
    {
      path: "/settings",
      element: (
        <ProtectedRoute><UserProvider><Settings /></UserProvider>
        </ProtectedRoute>
      ),
    },
  ],
  { basename: "/SocialHub--Your-place-for-communication/" }
);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HeroUIProvider>
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </HeroUIProvider>
    </QueryClientProvider>
  );
}