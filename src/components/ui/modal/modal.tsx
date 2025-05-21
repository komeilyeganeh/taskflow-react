import { ModalType } from "@/types/modal.type"

export const Modal: React.FC<ModalType> = ({ title, children, size, open, onClose }) => {
    return (
        <dialog className="modal" open={open}>
            <div className={`modal-box max-w-${size}`}>
                <form method="dialog" onSubmit={(e) => e.stopPropagation()}>
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
                </form>
                <h3 className="font-bold text-lg">{title}</h3>
                <div className="py-4">
                    {children}
                </div>
            </div>
        </dialog>
    )
}
