import { HouseLine, ListBullets, Files, CheckSquareOffset, FlagPennant, Users } from "@phosphor-icons/react";
import { NavItem } from "./NavItem";

export function MainNavigation() {
    return (
        <nav className="space-y-0.5">
            <NavItem title="Home" icon={HouseLine} />
            <NavItem title="Dashboard" icon={ListBullets} />
            <NavItem title="Projects" icon={Files} />
            <NavItem title="Tasks" icon={CheckSquareOffset} />
            <NavItem title="Reporting" icon={FlagPennant} />
            <NavItem title="Users" icon={Users} />
        </nav>
    )
}