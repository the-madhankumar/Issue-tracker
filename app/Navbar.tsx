"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaBug } from "react-icons/fa";
import classnames from "classnames";

const Navbar = () => {
    const links = [
        {
            label: 'Dashboard',
            href: "/"
        },
        {
            label: 'Issues',
            href: "/Issues"
        }
    ]

    const currentPath = usePathname();

    return (
        <nav className="flex space-x-6 border-b h-14 items-center px-6">
            <Link href="/"><FaBug /></Link>
            <ul className="flex space-x-6">
                {links.map((item) => (
                    <li key={item.label}>
                        <Link 
                            className={classnames({
                                "text-zinc-950": currentPath === item.href,
                                "text-zinc-400": currentPath !== item.href,
                                "hover:text-zinc-800": true,
                                "transition-colors": true
                            })} 
                            href={item.href}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar
