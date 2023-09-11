'use client';
import { DotsThreeOutline, GearSix, Lifebuoy, MagnifyingGlass } from "@phosphor-icons/react";
import { Logo } from "./Logo";
import { MainNavigation } from "./MainNavigation";
import { NavItem } from "./MainNavigation/NavItem";
import { UsedSpaceWidget } from "./MainNavigation/UsedSpaceWidget";
import { Profile } from "./Profile";
import { InputRoot, InputControl, InputPrefix } from "../Input";
import * as Collpasible from '@radix-ui/react-collapsible'
import { Button } from "../Button";

export function Sidebar() {
    return (
        <Collpasible.Root className=" border-b border-zinc-200 p-4  data-[state=open]:bottom-0  lg:data-[state=closed]:bottom-0 dark:bg-zinc-900 dark:border-zinc-800 flex flex-col gap-6 fixed left-0 top-0 right-0 z-20 bg-white lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:relative">
            <div className="flex items-center justify-between">
                <Logo />
                <Collpasible.Trigger asChild className="lg:hidden">
                        <Button variant="ghost">
                            <DotsThreeOutline className="h-6 w-6"/>
                        </Button>
                </Collpasible.Trigger>
            </div>

            <Collpasible.Content forceMount className="flex-1 flex flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex">
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
            </Collpasible.Content>
        </Collpasible.Root>
    )
}