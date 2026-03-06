import { Avatar, Button, Card, Textarea } from '@heroui/react'
import { IconContrast2, IconSend, IconPolaroid  } from '@tabler/icons-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function CreatePost({ user }) {

  // console.log("user" , user);

  const queryClient = useQueryClient();

  const createPost = (formData) => {
    return axios.post(
      "https://route-posts.routemisr.com/posts",
      formData,
      {
        headers: {
          Token: localStorage.getItem("token"),
        }
      }
    )
  }

  const {data , isPending , mutate} = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GetAllPosts"] });
    }
  })

  const HandlePost = (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
  
    mutate(formData);
  };

  // if (mutation.isPending) {
  //   console.log("Sending data" , data)
  // }

  return (
    <Card className="bg-white shadow p-5 rounded-2xl space-y-4">

      <header className="flex items-center gap-3">
        <Avatar
          src={user?.photo}
          className="w-12 h-12 border border-gray-400/20"
        />
        <div>
          <h2 className="font-semibold">Create a Post</h2>
          <p className="text-default-400 text-sm -mt-1">
            Share your thoughts with the world
          </p>
        </div>
      </header>

      <form className="space-y-4" onSubmit={HandlePost}>

        <div className="relative">
          <Textarea
            placeholder="What's on your mind?"
            name="body"
            className="pl-11 min-h-24"
          />
          
        </div>

        <div className="flex justify-between items-center border-t border-gray-400/20 pt-4">

          <label htmlFor="image">
            <div className="btn flex gap-1 items-center cursor-pointer">
              <IconPolaroid  />
              <span>Photo</span>
            </div>

            <input
              type="file"
              id="image"
              name="image"
              className="hidden"
            />
          </label>

          <Button
            type="submit"
            isLoading={isPending}
            className="flex gap-1 items-center bg-linear-to-br from-blue-500 to-cyan-400 text-white border-none"
          >
            <span>Post</span>
            <IconSend />
          </Button>

        </div>

      </form>

    </Card>
  )
}