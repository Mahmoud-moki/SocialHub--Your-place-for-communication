import React from 'react'
import Login from './assets/login/Login'
import Home from './assets/Home/Home'
import AuthContextProvider from './assets/context/Auth';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from './assets/SignUp/SignUp';
import { HeroUIProvider } from '@heroui/react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import PostLayout from './assets/Postlayout/PostLayout'
import { UserProvider } from './assets/context/UserData';


const queryClient = new QueryClient()
const router = createBrowserRouter(
  [
    { path: "/", element: <Login /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/home", element: <UserProvider><Home /></UserProvider> },
    // { path: "/postlayout", element: <PostLayout /> },
  ],
  {
    basename: "/SocialHub--Your-place-for-communication/"
  }
);


export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <HeroUIProvider>
          <RouterProvider router={
            router} />
        </HeroUIProvider>
      </AuthContextProvider>
    </QueryClientProvider>

  );

}
