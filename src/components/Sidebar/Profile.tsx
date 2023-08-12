import { UserSwitch } from "@phosphor-icons/react";

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
            <button type="button" className="ml-auto rounded p-2 hover:bg-zinc-100">
                <UserSwitch className="h-5 w-5 tex-zinc-500"/>
            </button>
        </div>
    )
}