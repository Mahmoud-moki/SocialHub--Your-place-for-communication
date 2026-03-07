import { Avatar, Button, Card, CardBody, Divider } from '@heroui/react'
import { useQuery } from '@tanstack/react-query';
// import React, { createContext, useContext } from 'react'
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import { IconBookmark, IconCalendarEvent, IconHomeFilled, IconLogout, IconSettings, IconUser, IconUsers } from '@tabler/icons-react';


export default function ProfileCard({ setUserPhoto }) {

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
  const { name, photo, followersCount, followingCount, cover } = data?.data?.data?.user;

  return (
    <>
      <Card className=" mb-5 overflow-hidden   shadow-gray-500 shadow ">

        {cover ? (
          <img
            src={cover}
            alt="cover"
            className="h-20 w-full object-cover"
          />
        ) : (
          <div className="h-20 bg-linear-to-r from-blue-500 to-cyan-400" />
        )}
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


    </>


  )
}
