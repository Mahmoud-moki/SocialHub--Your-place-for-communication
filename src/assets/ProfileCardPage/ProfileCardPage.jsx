import {
    Card,
    CardBody,
    CardHeader,
    Avatar,
    Button,
    Image
} from "@heroui/react";
import { IconCamera, IconUsers, IconMail } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function ProfileCardPage({ user, post }) {




    // console.log("data", user);
    // console.log("posts", post);

    const ChangeCover = (formData) => {
        return axios.post(
            `https://route-posts.routemisr.com/${user.id}/uploadCoverPhoto`,
            formData,
            {
                headers: {
                    Token: localStorage.getItem("token"),
                }
            }
        )
    }

    const { data, isPending, mutate } = useMutation({
        mutationFn: ChangeCover,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["GetAllPosts"] });
        }
    })
const HandleChanceCover = (e) => {
  console.log("file selected", e.target.files[0]);

  const formData = new FormData();
  formData.append("photo", e.target.files[0]);

  mutate(formData);
};

    console.log("sent data" , data);
    




    return (
        <Card className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">

            {user?.cover ? (
                <div className="relative h-52">
                    <img
                        src={user.cover}
                        alt="cover"
                        className="w-full h-full object-cover"
                    />
                        <label className="absolute top-3 right-3 flex items-center gap-2 bg-black/50 text-white text-xs font-bold px-3 py-1.5 rounded-lg cursor-pointer backdrop-blur hover:bg-black/60">
                            <IconCamera size={14} />
                            Change cover
                            <input type="file" className="hidden" accept="image/*"   onChange={HandleChanceCover} />
                        </label>
                </div>
            ) : (
                <div className="relative h-52 bg-[linear-gradient(112deg,#0f172a_0%,#1e3a5f_36%,#2b5178_72%,#5f8fb8_100%)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_24%,rgba(255,255,255,.14)_0%,rgba(255,255,255,0)_36%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_12%,rgba(186,230,253,.22)_0%,rgba(186,230,253,0)_44%)]"></div>

                    <label className="absolute top-3 right-3 flex items-center gap-2 bg-black/50 text-white text-xs font-bold px-3 py-1.5 rounded-lg cursor-pointer backdrop-blur hover:bg-black/60">
                        <IconCamera size={14} />
                        Add cover
                        <input type="file" className="hidden" accept="image/*"   onChange={HandleChanceCover} />
                    </label>
                </div>
            )
            }

            <CardBody className="-mt-16 px-6 pb-6">

                <div className="rounded-3xl border border-white/60 bg-white/90 backdrop-blur-xl p-6">
                    <CardHeader className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div className="flex items-end gap-4">

                            <div className="relative group">
                                <Avatar
                                    src={user?.photo}
                                    className="w-28 h-28 border-4 border-white shadow-md ring-2 ring-blue-100"
                                />
                                <Button
                                    isIconOnly
                                    size="sm"
                                    radius="full"
                                    className="absolute bottom-1 left-1 bg-white text-blue-600 shadow-sm opacity-0 group-hover:opacity-100"
                                >
                                    {/* <IconExpand size={16} /> */}
                                </Button>
                                <label className="absolute bottom-1 right-1 flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white cursor-pointer opacity-0 group-hover:opacity-100 hover:bg-blue-700">
                                    <IconCamera size={16} />
                                    <input type="file" className="hidden" accept="image/*" />
                                </label>
                            </div>

                            <div>
                                <h2 className="text-3xl font-black text-slate-900">
                                    {user?.name}
                                </h2>

                                <p className="text-slate-500 font-semibold">@{user?.name}</p>

                                <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                                    <IconUsers size={14} />
                                    Route Posts member
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 w-full lg:w-130">

                            <div className="rounded-xl border border-slate-200 text-center p-4">
                                <p className="text-xs font-bold uppercase text-slate-500">
                                    Followers
                                </p>
                                <p className="text-2xl font-black">{user.followersCount}</p>
                            </div>

                            <div className="rounded-xl border border-slate-200 text-center p-4">
                                <p className="text-xs font-bold uppercase text-slate-500">
                                    Following
                                </p>
                                <p className="text-2xl font-black">{user.followingCount}</p>
                            </div>

                            <div className="rounded-xl border border-slate-200 text-center p-4">
                                <p className="text-xs font-bold uppercase text-slate-500">
                                    Bookmarks
                                </p>
                                <p className="text-2xl font-black">{user.bookmarks.length}</p>
                            </div>

                        </div>

                    </CardHeader>

                    <div className="mt-6 grid gap-4 lg:grid-cols-[1.3fr_.7fr]">

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <h3 className="text-sm font-extrabold text-slate-800">
                                About
                            </h3>

                            <div className="mt-3 space-y-2 text-sm text-slate-600">

                                <p className="flex items-center gap-2">
                                    <IconMail size={15} className="text-slate-500" />
                                    {user?.email}
                                </p>

                                <p className="flex items-center gap-2">
                                    <IconUsers size={15} className="text-slate-500" />
                                    Active on Route Posts
                                </p>

                            </div>
                        </div>
                        <div className="grid gap-3">

                            <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3">
                                <p className="text-xs font-bold uppercase text-blue-900">
                                    My posts
                                </p>
                                <p className="text-2xl font-black">{post.length}</p>
                            </div>

                            <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3">
                                <p className="text-xs font-bold uppercase text-blue-900">
                                    Saved posts
                                </p>
                                <p className="text-2xl font-black">0</p>
                            </div>

                        </div>

                    </div>

                </div>

            </CardBody>
        </Card >)
}
