import React from "react";
import getUserPosts from "@/lib/getUserPosts";
import getUser from "@/lib/getUser";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";

type Params = {
  params: {
    userID: string;
  };
};

export default async function UserPage({ params: { userID } }: Params) {
  const userData: Promise<User> = getUser(userID);
  const userPostsData: Promise<Post[]> = getUserPosts(userID);
  //   const [user, userPosts] = await Promise.all([userData, userPostsData]);
  const user = await userData;
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense>
        <UserPosts promise={userPostsData}></UserPosts>
      </Suspense>
    </>
  );
}
