import Link from "next/link";
import logotext from "@/public/EVAtext.png"
import Image from "next/image";
import logotextsm from "@/public/Evatextsm.png"
import evalogo from "@/public/nobuf.png"

export default function Navbar() {
    return(
        <nav className="container flex justify-end">
            <div className="">
                <Link href="/" className="p-10">
                    Home
                </Link>
                <Link href="/ecommerce" className="p-10">
                    Ecommerce
                </Link>
                <Link href="/static" className="p-10">
                    Static
                </Link>
            </div>
        </nav>

    );
}