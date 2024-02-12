import EVAimg from "@/public/EVATrans.png"
import Image from "next/image";
import Link from "next/link";

export default function Title() {
    return(
        <div className="flex justify-center hover:outline-2">
            <Link href="/" className="hover:opacity-50">
            <Image 
            src={EVAimg} 
            alt="EVA logo with transparent background"
            />
            </Link>
        </div>
    );
}