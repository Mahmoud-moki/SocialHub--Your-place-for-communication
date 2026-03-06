import { Avatar, Button, Card, CardBody, Divider } from '@heroui/react'
import { useQuery } from '@tanstack/react-query';
// import React, { createContext, useContext } from 'react'
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import { IconBookmark, IconCalendarEvent, IconHomeFilled, IconLogout, IconSettings, IconUser, IconUsers } from '@tabler/icons-react';


export default function ProfileCard({setUserPhoto }) {

  const GetUserData = () => {
    return axios.get("https://route-posts.routemisr.com/users/profile-data", {
      headers: { Token: localStorage.getItem("token") },
    });
  };

  const { data, isLoading, isError, error, isFetched } = useQuery({
    queryKey: ["GetUserData"],
    queryFn: GetUserData,
  });

  if (isLoading) {
    return <div className='flex items-center justify-center h-screen'><BeatLoader /></div>
  }

  // console.log('Ermmm', data?.data?.data?.user);
  const { name, photo, followersCount, followingCount } = data?.data?.data?.user;

  return (
    <>
      <Card className=" mb-5 overflow-hidden   shadow-gray-500 shadow ">

        <div className="h-20 bg-linear-to-r from-blue-500 to-cyan-400 " />

        <CardBody className="px-5 pb-5 -mt-10">

          <Avatar
            src={photo}
            className="w-20 h-20 border-4 border-white shadow-lg"
          />

          <h3 className="font-bold text-lg mt-2">{name}</h3>
          <p className="text-default-500 text-sm">@{name}</p>

          <div className="flex gap-6 mt-3 text-sm">
            <div>
              <span className="font-bold text-default-900">{followersCount}</span>
              <span className="text-default-500 ml-1">Followers</span>
            </div>
            <div>
              <span className="font-bold text-default-900">{followingCount}</span>
              <span className="text-default-500 ml-1">Following</span>
            </div>
          </div>

        </CardBody>
      </Card>
      <Card className="bg-white boreder border-gray-300 rounded-2xl shadow-gray-500 shadow p-4 ">

        <ul className="space-y-1">
          <li>
            <a
              href="/"
              className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 bg-linear-to-r from-blue-500 to-cyan-400 text-white"
            >
              <IconHomeFilled className="text-lg" />
              <span className="font-medium">Home</span>
            </a>
          </li>
          <li>
            <a
              href="/profile"
              className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-gray-100 text-gray-700"
            >
              <IconUser className="text-lg" />
              <span className="font-medium">Profile</span>
            </a>
          </li>
          <li>
            <a
              href="/saved"
              className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-gray-100 text-gray-700"
            >
              <IconBookmark className="text-lg" />
              <span className="font-medium">Saved Posts</span>
            </a>
          </li>
          <li>
            <a
              href="/friends"
              className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-gray-100 text-gray-700"
            >
              <IconUsers className="text-lg" />
              <span className="font-medium">Friends</span>
            </a>
          </li>
          <li>
            <a
              href="/events"
              className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-gray-100 text-gray-700"
            >
              <IconCalendarEvent className="text-lg" />
              <span className="font-medium">Events</span>
            </a>
          </li>
          <li>
            <a
              href="/settings"
              className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-gray-100 text-gray-700"
            >
              <IconSettings className="text-lg" />
              <span className="font-medium">Settings</span>
            </a>
          </li>
        </ul>
        <Divider />
        <div className="  pt-4">
          <Button
            className="flex  gap-3 px-4 bg-transparent py-3 rounded-xl text-red-500 hover:bg-red-50 w-full transition-all duration-200"
          >
            <IconLogout className="text-lg" />
            <span className="font-medium">Logout</span>
          </Button>
        </div>
      </Card>

    </>


  )
}
