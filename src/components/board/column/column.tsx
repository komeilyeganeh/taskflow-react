import { useDroppable } from "@dnd-kit/core"
import { Task } from "../task/task"
import { ColumnHeader } from "./column-header"


export const Column = ({ id }: { id: string }) => {
    const { isOver, setNodeRef } = useDroppable({
        id: id,
    })
    // return a list of tasks
    return (
        <div ref={setNodeRef} className={`w-80 p-3 mx-2.5 border border-dashed border-gray-200 ${isOver && "border-2 border-double border-gray-200"} rounded-lg`}>
            <ColumnHeader />
            {/* list of tasks */}
            <Task id={`${id}-1`} />
            <Task id={`${id}-2`} />
            <Task id={`${id}-3`} />
        </div>
    )
}
