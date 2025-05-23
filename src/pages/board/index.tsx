import { BoardContainer } from "@/components/board/board-container"
import { useAuth } from "@/context/auth-context"
import { DndContext } from "@dnd-kit/core"
import { useState } from "react"
import { Navigate } from "react-router"

export const Board = () => {
    const { isAuthenticated } = useAuth()
    const [isDroppable, setIsDroppable] = useState(false)
    const handleDragEnd = (event: any) => { }

    // if user is not authenticated, redirect to login page
    if (!isAuthenticated) {
        return <Navigate to="/signup" />
    }

    // return jsx
    return (
        <section className="h-full">
            <div className="relative container mx-auto h-full p-4 overflow-hidden">
                {/* background image */}
                <div className="absolute inset-0 bg-[url('https://img.aestheticwallpaperai.com/wallpapers/f01906e5-3582-422d-84b8-27e98da1ccfc.webp')] bg-cover bg-center rounded-lg p-4 overflow-hidden -z-10">
                    {/* image overlay */}
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>
                {/* board title */}
                <div className="flex items-center mb-6 z-10">
                    <h1 className="text-2xl font-bold text-white">Board</h1>
                </div>
                <div className="z-10">
                    <DndContext onDragEnd={handleDragEnd}>
                        <BoardContainer />
                    </DndContext>
                </div>
            </div>
        </section>
    )
}
