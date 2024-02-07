import { Separator } from "@/components/ui/separator";

export default function Footer() {
    return(
        <div className="bg-gradient-to-r from-slate-300 to-blue-500">
            <footer>
                <Separator className="bg-black container-lg"/>
                <div className="flex justify-center bg-gradient-to-r from-slate-300 to-blue-500">
                    &copy; E.V.A LLC, All Rights Reserved. 
                </div>
            </footer>
        </div>
    );
}