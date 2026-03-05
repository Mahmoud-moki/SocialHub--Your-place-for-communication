import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Avatar,
  Button
} from "@heroui/react";

import {
  IconThumbUp, IconMessageDots, IconShare3,
} from "@tabler/icons-react";

export default function Post({ post }) {
  const { body, image, user, createdAt, topComment } = post;
  const { photo, name } = user;
  const firstComment = topComment ?? null;
  const commentContent = firstComment?.content;
  const commentCreator = firstComment?.commentCreator;

  return (
    <Card className="w-full mb-5">
      <CardHeader className="flex gap-3">
        <Avatar src={photo} className="w-10 h-10" />
        <div className="flex flex-col">
          <p className="font-semibold">{name}</p>
          <p className="text-xs text-default-500">{createdAt}</p>
        </div>
      </CardHeader>

      <Divider />

      <CardBody className="space-y-3">
        <p>{body}</p>
        {image && <Image src={image} alt="post image" className="rounded-xl" />}
      </CardBody>

      <Divider />

      <CardFooter>
        <div className="w-full flex text-lg">
          <Button variant="light" className="flex-1 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors">
            <IconThumbUp size={20} />
            <span>Like</span>
          </Button>
          <Button variant="light" className="flex-1 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors">
            <IconMessageDots size={20} />
            <span>Comment</span>
          </Button>
          <Button variant="light" className="flex-1 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors">
            <IconShare3 size={20} />
            <span>Share</span>
          </Button>
        </div>
      </CardFooter>

      <CardFooter className="w-full">
        {firstComment ? (
          <div className="w-full space-y-2">
            <div className="flex items-center gap-3">
              <Avatar src={commentCreator?.photo} className="w-10 h-10" />
              <div className="flex flex-col">
                <p className="font-semibold">{commentCreator?.name}</p>
                <p className="text-xs text-gray-400">{firstComment.createdAt}</p>
              </div>
            </div>
            <p className="text-default-500 pl-13">{commentContent}</p>
          </div>
        ) : (
          <p className="w-full text-gray-400 text-sm text-center">
            No comments yet. Be the first to comment
          </p>
        )}
      </CardFooter>
    </Card>
  );
}
