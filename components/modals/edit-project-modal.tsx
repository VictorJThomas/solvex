import { useEdit } from "@/hooks/use-edit";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";

export const EditProjectModal = () => {
    const edit = useEdit();

    return (
        <Dialog open={edit.isOpen} onOpenChange={edit.onClose}>
            <DialogContent>
                <DialogHeader className="border-b pb-3">
                    <h2 className="text-lg font-medium">
                        Task
                    </h2>
                </DialogHeader>
                <div className="flex items-center justify-between">
                    Task details
                </div>
            </DialogContent>
        </Dialog>
    )
}