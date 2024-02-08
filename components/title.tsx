import EVAimg from "@/public/EVAlogo.jpg"
import Image from "next/image";

export default function Title() {
    return(
        <div className="">
            <Image 
            src={EVAimg} 
            alt="EVA logo"
            height={15}
            width={15}
            className="flex justify-center"
            />
        </div>
    );
}