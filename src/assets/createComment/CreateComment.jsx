import { Avatar, Button, CardFooter, Textarea } from '@heroui/react'
import { IconMoodSmile, IconPhoto, IconSend } from '@tabler/icons-react'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from "axios";
import React from 'react'

export default function CreateComment({ user, post }) {

    // const {photo} = user;
    // console.log("id" , post.id);
    const queryClient = useQueryClient();

    const createComment = (formData) => {
        return axios.post(
            `https://route-posts.routemisr.com/posts/${post._id}/comments`,
            formData,
            {
                headers: {
                    Token: localStorage.getItem("token"),
                }
            }
        )
    }

    const { data, isPending, mutate } = useMutation({
        mutationFn: createComment,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["GetAllPosts"] });
        }
    })

    const HandlePost = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        mutate(formData);
        e.target.reset()
    };

    // console.log("Data" , data);
    

    return (
        <>
            <CardFooter>
                <div className="mt-3 w-full">
                    <div className="flex items-start gap-2">

                        <Avatar
                            src={user?.photo}
                            className="w-9 h-9"
                        />
                        <form className="w-full" onSubmit={HandlePost}>
                            <div className="w-full rounded-2xl border border-slate-200 bg-[#f0f2f5] px-2.5 py-1.5 focus-within:border-[#c7dafc] focus-within:bg-white">
                                <Textarea
                                name="content"
                                    placeholder="Comment as Shawna..."
                                    minRows={1}
                                    classNames={{
                                        input:
                                            "resize-none bg-transparent text-sm leading-5 placeholder:text-slate-500",
                                        inputWrapper: "bg-transparent shadow-none px-2 py-1",

                                    }}
                                />
                                <div className="mt-1 flex items-center justify-between">

                                    <div className="flex items-center gap-1">
                                        <label className="cursor-pointer rounded-full p-2 text-slate-500 hover:bg-slate-200 hover:text-emerald-600 transition">
                                            <IconPhoto size={16} />
                                            <input type="file" accept="image/*" className="hidden" />
                                        </label>
                                        <Button
                                        
                                            isIconOnly
                                            variant="light"
                                            radius="full"
                                            className="text-slate-500 hover:text-amber-500"
                                        >
                                            <IconMoodSmile size={16} />
                                        </Button>

                                    </div>
                                    <Button
                                      type="submit"
                                        isIconOnly
                                        radius="full"
                                        className="bg-[#1877f2] text-white hover:bg-[#166fe5]"
                                        

                                    >
                                        <IconSend size={16} />
                                    </Button>

                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </CardFooter >
        </>)
}
