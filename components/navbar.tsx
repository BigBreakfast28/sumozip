"use client"

import Link from "next/link";
import evaForm from "@/public/evaForm.png"
import Image from "next/image";
import Modal from "./ui/modal";
import { useState } from "react"

/*const [open, setOpen] = useState<boolean>(false)*/




export default function Navbar() {
    return(
        <nav className="w-full z-20 bg-white">
            <div className="container relative flex flex-wrap items-center justify-between p-12">
                <Link href="/">
                    <Image
                    src={evaForm}
                    alt="EVA Logo"
                    height={200}
                    width={200}
                    />
                </Link>
                <Link href="/" className=" hover:underline text-2xl">
                    Home
                </Link>
                <button onClick={() => setOpen(true)}>

                </button>
                <Modal open={open} onClose={() => setOpen(false)} children={undefined}/>
            </div>
        </nav>

    );
}
