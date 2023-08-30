import { UserSwitch } from "@phosphor-icons/react";
import { Button } from "../Button";

export function Profile() {
    return (
        <div className="grid items-center gap-3 grid-cols-profile">
            <img
                src="https://github.com/rodlferreira.png"
                className="h-10 w-10 rounded-full"
                alt="Foto de perfil"
            />
            <div className="truncate flex flex-col">
                <span className="text-sm font-semibold text-zinc-700">
                    Rodriggo Ferreira
                </span>

                <span className="truncate text-sm text-zinc-500">
                    rodriggo.lferreira@icloud.com
                </span>
            </div>
            <Button
                type="button"
                variant="ghost">
                <UserSwitch className="h-5 w-5 tex-zinc-500" />
            </Button>
        </div>
    )
}