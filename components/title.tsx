

import EVAlogo from "@/public/EVAlogo.jpg"
import Image from "next/image";
import Link from "next/link";

export default function Title() {
    return(
        <div className="flex justify-center hover:outline-2">
            <Link href="/" className="hover:opacity-50">
            <Image 
            src={EVAlogo} 
            alt="EVA logo with transparent background"
            height={900}
            width={900}
            className="p-4"
            />
            </Link>
        </div>
    );
}