'use client';
import { GearSix, Lifebuoy, MagnifyingGlass } from "@phosphor-icons/react";
import { Logo } from "./Logo";
import { MainNavigation } from "./MainNavigation";
import { NavItem } from "./MainNavigation/NavItem";
import { UsedSpaceWidget } from "./MainNavigation/UsedSpaceWidget";
import { Profile } from "./Profile";
import { InputRoot, InputControl, InputPrefix } from "../Input";

export function Sidebar() {
    return (
        <aside className="border-b border-zinc-200 p-4 bottom-0 flex flex-col gap-6 fixed left-0 top-0 right-0 z-20 bg-white lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:relative">
            <Logo />
            <InputRoot>
                <InputPrefix>
                    <MagnifyingGlass className="h-5 w-5 text-zinc-500" />
                </InputPrefix>
                <InputControl placeholder="Search" />
            </InputRoot>
            <MainNavigation />

            <div className="mt-auto flex flex-col gap-6">
                <nav className="space-y-0.5">
                    <NavItem title="Suport" icon={Lifebuoy} />
                    <NavItem title="Settings" icon={GearSix} />
                </nav>
                <UsedSpaceWidget />
                <div className="h-px bg-zinc-200 " />
                <Profile />
            </div>
        </aside>
    )
}