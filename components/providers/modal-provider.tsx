"use client";

import { useEffect, useState } from "react";
import { EditProjectModal } from "../modals/edit-project-modal";
import { CreateProjectModal } from "../modals/create-project-modal";
import { ViewProjectModal } from "../modals/view-project-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted){
        return null;
    }

    return (
        <>
            <ViewProjectModal />
            <EditProjectModal />
            <CreateProjectModal />
        </>
    )
}