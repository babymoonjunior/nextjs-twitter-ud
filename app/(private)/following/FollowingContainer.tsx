"use client";

import { useState } from "react";
import FollowingList from "./FollowingList";


export default function FollowingContainer() {
    const [cnt, setCnt] = useState(1);

    const pages = [];
    for (let i = 0; i < cnt; i++) {
        pages.push(<FollowingList index={i} />)
    }

    return (
        <div>
            {pages}
            <div className="flex justify-center w-full">
                <button onClick={() => setCnt(cnt + 1)} 
                className="bg-slate-900 p-2 rounded-lg">Load More</button>
            </div>
        </div>
    )
}