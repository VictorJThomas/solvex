import { UserItem } from "@/app/(main)/(routes)/home/_components/user-item"
import { cn } from "@/lib/utils"

export const Sidebar = () => {
    return (
        <>
            <aside
                className={cn(
                    "h-full overflow-y-auto relative flex w-60 flex-col z-[99999] "
                )}
            >
                <UserItem />
            </aside>
        </>
    )
}