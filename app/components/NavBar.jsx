import Image from "next/image";
import Link from "next/link";
export default function NavBar(){

    return(
        <nav>
            <div className="bg-orange-400 flex items-center justify-between px-12">
                <div className="flex items-center gap-2">
                    <Image 
                        src="/logo.png" 
                        alt="PlaceMate Logo" 
                        height={80}
                        width={180}
                    />
                </div>

                <div className="flex gap-12 items-center text-lg font-semibold">
                    <Link href="/" className="hover:scale-110 ease-in-out duration-300 transition-all ">Home</Link>
                    <Link href="/progress" className="hover:scale-110 ease-in-out duration-300 transition-all">Progress</Link>
                    <Link href="/dash" className="hover:scale-110 ease-in-out duration-300 transition-all">DashBoard</Link>
                    <Link href="/sign" className="hover:scale-110 ease-in-out duration-300 transition-all">SignIn</Link>
                </div>
            </div>
        </nav>
    );
}