import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const Nav: React.FC = () => {
    return (
        <nav className={"h-16 w-full"}>
            <div className={"fixed top-0 left-0 w-full bg-amber-400 drop-shadow-xl z-50"}>
                <div className={"max-w-7xl mx-auto px-20"}>
                    <div className={"flex items-center justify-between h-16"}>
                        <Link href={"/"} className={"flex items-center"}>
                            <Image src={"/logo.png"} width={50} height={50} alt={"logo"}></Image>
                            <h1 className={"font-bold text-2xl ml-4"}>STUCK</h1>
                        </Link>
                        <div className="flex items-end space-x-8">
                            <Link href="/about" className="font-semibold">ABOUT</Link>
                            <Link href="/news" className="font-semibold">NEWS</Link>
                            <Link href="/tutors" className="font-semibold">TUTORS</Link>
                            <Link href="/programs" className="font-semibold">PROGRAMS</Link>
                            <Link href="/sponsors" className="font-semibold">SPONSORS</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Nav;
//hi guys