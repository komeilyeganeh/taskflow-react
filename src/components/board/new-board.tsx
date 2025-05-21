import { useState } from "react";
import { Modal } from "../ui/modal/modal"

export const NewBoard = () => {
    const [open, setOpen] = useState(false);
    // return jsx
    return (
        <>
            <button className="btn btn-success" onClick={() => setOpen(true)}>Create Board</button>
            <Modal title="Create a new board" size="md" open={open} onClose={() => setOpen(false)}>
                <form className="flex flex-col gap-4">
                    <input type="text" placeholder="Board Title..." className="input outline-none w-full" />
                    <button type="submit" className="btn btn-success">Create</button>
                </form>
            </Modal>
        </>
    )
}
