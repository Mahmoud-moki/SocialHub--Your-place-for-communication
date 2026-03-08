import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import SideNav from '../SideNav/SideNav'
import ProfileCardPage from '../ProfileCardPage/ProfileCardPage'
import UnderDev from '../UnderDev/UnderDev'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Card, CardBody } from '@heroui/react'
import { IconPhotoOff } from '@tabler/icons-react'


export default function SavedPosts() {


  const GetSavedPosts = () => {
    return axios.get("https://route-posts.routemisr.com/users/bookmarks?page=1&limit=20", {
      params: { limit: 20 },
      headers: { Token: localStorage.getItem("token") },
    });
  };

  const { data, isLoading } = useQuery({
    queryKey: ["GetSavedPosts"],
    queryFn: GetSavedPosts,
  });

  const UserPosts = data?.data?.data?.posts;

  // console.log('posts', UserPosts);

  
  return (
    <>
      <div className="flex p-5 gap-5">
        <div className="w-1/3 sticky top-5 self-start">
          <ProfileCard />
          <SideNav />
        </div>
        <div className='gap-2 w-full'>
          {/* <ProfileCardPage user={user} post={UserPosts} /> */}
          <div className='py-3'>
            {UserPosts?.length > 0 ? (
              UserPosts.map((post) => (
                <PostLayout key={post._id} post={post} user={user} />
              ))
            ) : (
              <div className="flex items-center justify-center min-h-[60vh]">
              <Card className="max-w-sm w-full text-center shadow-md">
                <CardBody className="flex flex-col items-center gap-3 py-8">
                  <IconPhotoOff size={40} className="text-gray-400" />
                  <h2 className="text-lg font-semibold">No Saved Posts Yet</h2>
                  <p className="text-gray-500 text-sm">
                    You don't any saved posts yet.
                  </p>
                </CardBody>
              </Card>
            </div>
            )}
          </div>
        </div>
      </div>

      {/* <UnderDev /> */}
    </>)
}


// https://route-posts.routemisr.com/users/bookmarks?page=1&limit=20
