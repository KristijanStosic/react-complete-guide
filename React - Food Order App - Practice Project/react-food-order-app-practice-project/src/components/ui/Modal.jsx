import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose, className = '' }) {
    const dialog = useRef();

    useEffect(() => {
        const modal = dialog.current;

        if (open) {
            modal.showModal();
        }

        return () => modal.close(); 
        // cleanup fn will run at a later point of time than this effect fn when it runs for the first time
        // because the cleanup fn will then only run once open value changed at some point in the future
    }, [open]);

    return createPortal(
        <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
            {children}
        </dialog>,
        document.getElementById("modal")
    );
}