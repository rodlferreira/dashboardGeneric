import { CaretCircleDoubleDown } from "@phosphor-icons/react";
import { ElementType } from "react"

export interface NavItemProps {
    title: string;
    icon: ElementType;
}

export function NavItem({ title: nameMenu, icon: Icon }: NavItemProps) {
    return (
        <nav className="space-y-0.5">
            <a href="Home" className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 dark:hover:bg-zinc-800">
                <Icon size={32} className="h-5 w-5 text-zinc-500" />
                <span className="font-medium text-zinc-700 group-hover:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-300">
                    {nameMenu}
                </span>
                <CaretCircleDoubleDown size={32} className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300 dark:text-zinc-600" />
            </a>
        </nav>
    )
}