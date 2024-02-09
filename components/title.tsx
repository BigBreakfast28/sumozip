import EVAimg from "@/public/EVAlogo.jpg"
import Image from "next/image";

export default function Title() {
    return(
        <div className="flex justify-center">
            <Image 
            src={EVAimg} 
            alt="EVA logo"
            height={400}
            width={400}
            className="flex justify-center"
            />
        </div>
    );
}