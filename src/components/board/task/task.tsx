import { useDraggable } from "@dnd-kit/core"


export const Task = ({ id }: { id: string }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id,
    })
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined
    // return a draggable task
    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 p-3 mb-2 hover:cursor-pointer">
            <h3 className="text-lg font-bold text-white">Task {id}</h3>
        </div>
    )
}
