import { useCreate } from "@/hooks/use-create"
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog"

export const CreateProjectModal = () => {
    const create = useCreate()

    return (
        <Dialog open={create.isOpen} onOpenChange={create.onClose}>
            <DialogContent>
                <DialogHeader className="border-b pb-3">
                    <h2 className="text-lg font-medium">
                        Project
                    </h2>
                </DialogHeader>
                <div className="flex items-center justify-between">
                    Project details
                </div>
            </DialogContent>
        </Dialog>
    )
}