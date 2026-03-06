import React, { useEffect, useState } from 'react'
import { Alert, Card, CardBody, Avatar, Button, Divider, Textarea, user, CardHeader, CardFooter, Link, Image } from "@heroui/react";
import { IconHomeFilled, IconUser, IconCalendarEvent, IconSettings, IconLogout, IconBookmark, IconBulb, IconSend, IconContrast2, IconUsers, IconSearch } from '@tabler/icons-react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import PostLayout from "./../Postlayout/PostLayout"
// import Post from "./../Postlayout/PostLayout";
import { BeatLoader } from 'react-spinners';
import ProfileCard from '../ProfileCard/ProfileCard';
import CreatePost from '../CreatePost/CreatePost';
import { useUser } from '../context/UserData'
import SuggestionLayout from '../SuggestionLayout/SuggestionLayout';
// import Oval from "react-loader-spinner"


export default function Home() {

  const GetAllPosts = () => {
    return axios.get("https://route-posts.routemisr.com/posts", {
      params: { limit: 20 },
      headers: { Token: localStorage.getItem("token") },
    });
  };


  const { data, isLoading, isError, error, isFetched } = useQuery({
    queryKey: ["GetAllPosts"],
    queryFn: GetAllPosts,
  });


  const posts = data?.data?.data?.posts;
  const { user } = useUser();






  if (isLoading) {
    return <div className='flex items-center justify-center h-screen'><BeatLoader /></div>
  }

// if(isFetched){
//   return <div><p>loading</p></div>
// }


  return (
    <>
      <div className='flex'>
        <div className='p-5 w-1/4'>
          <div className='sticky top-5'>
            <ProfileCard />
          </div>
        </div>
        <div className='w-1/2 pt-5'>``
          <CreatePost user={user} />
          <Card className="w-full mt-5">
            {posts?.map((post) => (
              <PostLayout key={post._id} post={post} />
            ))}
          </Card>
        </div>
        <div className='p-5 w-1/4' >
          <div className='sticky top-5'>
            <aside className="hidden h-fit xl:sticky xl:top-21 xl:block">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <IconUsers stroke={2} size={18} color="blue" />
                    <h3 className="text-base font-extrabold text-slate-900">
                      Suggested Friends
                    </h3>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="relative block">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      <IconSearch stroke={2} size={15} />
                    </div>
                    <input
                      type="text"
                      placeholder="Search friends..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-700 outline-none focus:border-[#1877f2] focus:bg-white"
                    />
                  </label>

                </div>

                <SuggestionLayout />

                <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100">
                  View more
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>

    </>

  )
}
