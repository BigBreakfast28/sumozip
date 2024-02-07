import Link from "next/link";

export default function Navbar() {
    return(
        <div className="bg-gradient-to-r from-slate-300 to-blue-500">
            <Link href="/" className=" flex justify-start pt-4 pl-4 text-xl hover:font-bold">
                EVA
            </Link>
            <div className="flex justify-end space-x-20 pr-8">
                <Link href="/ecommerce" className="hover:font-bold">
                    Ecommerce Store
                </Link>
                <Link href="/static" className="hover:font-bold">
                    Static Web Page
                </Link>
            </div>
        </div>

    );
}