"use client"

import Link from "next/link";
import logotext from "@/public/EVAtext.png"
import Image from "next/image";
import logotextsm from "@/public/Evatextsm.png"
import evalogo from "@/public/nobuf.png"
import { Separator } from "@radix-ui/react-separator";

export default function Navbar() {
    return(
        <nav className="container flex justify-end bg-amber-400 border-black">
            <div className="">
                <Link href="/" className="p-10 hover:font-extrabold hover:text-4xl hover:text-white text-2xl">
                    Home
                </Link>
                <Link href="/ecommerce" className="p-10 hover:font-bold hover:text-2xl hover:text-white text-xl">
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