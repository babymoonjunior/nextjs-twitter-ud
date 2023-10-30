"use client";

import { SWRConfig } from "swr";

import Footer from "./footer";
import Header from "./header";
import NavBar from "./navbar";
import fetcher from "../utils/fetcher";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
    return (
        <SWRConfig value={{ fetcher: fetcher }}>
            <div className="flex flex-col min-h-screen max-w-md m-auto items-center justify-center">
                <Header />
                <NavBar />
                <main className="text-white w-full p-5 bg-slate-800 rounded-lg my-2">
                    {children}
                </main>
                <Footer />
            </div>
        </SWRConfig>
    )
}