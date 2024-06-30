import Link from 'next/link'
import React from 'react'
import { FaBug } from "react-icons/fa";

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
    return (
        <nav className="flex space-x-6 border-b h-14 items-center px-6">
            <Link href="/"><FaBug /></Link>
            <ul className="flex space-x-6">
                {links.map((items) => (
                    <li key={items.label}><Link className= "text-zinc-400 hover:text-zinc-950 transition-colors" href={items.href}>{items.label}</Link></li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar
