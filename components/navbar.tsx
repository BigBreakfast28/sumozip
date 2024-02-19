"use client"

import Link from "next/link";
import logotrans from "@/public/EVATrans.png"
import Image from "next/image";
import { Separator } from "@radix-ui/react-separator";

export default function Navbar() {
    return(
        <nav className="container-lg flex justify-end bg-white p-20">
            <div className="">
                <Link href="/">
                    <Image
                    src={logotrans}
                    alt="EVA Logo"
                    height={200}
                    width={200}
                    />
                </Link>
                <Link href="/" className=" p-10 hover:font-extrabold hover:text-4xl hover:text-white text-2xl">
                    Home
                </Link>
                <Link href="/ecommerce" className="hover:font-bold hover:text-2xl hover:text-white text-xl">
                    Ecommerce
                </Link>
                <Link href="/static" className="p-10 hover:font-bold hover:text-2xl hover:text-white text-xl">
                    Static
                </Link>
            </div>
            <div>

            </div>
        </nav>

    );
}