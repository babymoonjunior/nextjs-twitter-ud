"use client";
import useSWR from "swr";
import Form from "./Form";
import PostContainer from "@/app/components/PostContainer";

export default function Profile() {
    const {data, error, isLoading} = useSWR("/api/users/profile")
    if(error) return <div>failed to load</div>
    if(isLoading) return <div>loading...</div>

    console.log(data);
    
    return (
        <main>
            <h2>Profile</h2>
            <Form />
            <PostContainer username={data.data.username} />
        </main>
    )
}