import { useState } from "react"
import { IoTrashBin } from "react-icons/io5"
import { MdEditSquare } from "react-icons/md"

export const ColumnHeader = () => {
    const [isEditing, setIsEditing] = useState(false)
    // return a column header
    return (
        <div className="flex justify-between gap-1 items-center mb-4">
            <input type="text" disabled={!isEditing} className="input input-bordered w-full disabled:bg-transparent disabled:text-white disabled:border-none text-lg disabled:font-bold disabled:cursor-default disabled:placeholder:!text-white" placeholder="Column Title" />
            {/* delete column button */}
            <button className="btn btn-sm btn-soft btn-error"><IoTrashBin size={17}/></button>
            {/* edit column button */}
            <button className="btn btn-sm btn-soft btn-primary" onClick={() => setIsEditing(!isEditing)}><MdEditSquare size={17}/></button>
        </div>
    )
}
