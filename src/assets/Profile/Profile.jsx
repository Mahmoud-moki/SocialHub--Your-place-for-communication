import axios from 'axios';
import { useUser } from '../context/UserData'
import ProfileCardPage from "../ProfileCardPage/ProfileCardPage";
import SideNav from '../SideNav/SideNav';
import PostLayout from "./../Postlayout/PostLayout";
import { useQuery } from '@tanstack/react-query';
import { BeatLoader } from 'react-spinners';


export default function Profile() {
    const { user } = useUser();

    const GetUserPosts = () => {
        return axios.get("https://route-posts.routemisr.com/posts/feed?only=me", {
            params: { limit: 20 },
            headers: { Token: localStorage.getItem("token") }, // capital T
        });
    };

    const { data, isLoading } = useQuery({
        queryKey: ["GetUserPosts"],
        queryFn: GetUserPosts,
    });

    const UserPosts = data?.data?.data?.posts;


    if (isLoading) {
        return <div className='flex items-center justify-center h-screen'><BeatLoader /></div>
    }

    return (
        <>
            <div className="flex p-5 gap-5">
                <div className="w-1/2 sticky top-5 self-start">
                    <SideNav />
                </div>
                <div className='gap-2'>
                    <ProfileCardPage user={user} />
                    <div className='py-3'>
                        {UserPosts?.map((post) => (
                            <PostLayout key={post._id} post={post} user={user} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}



