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
        <aside className="border-r border-zinc-200 px-5 py-8 flex flex-col gap-6 ">
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