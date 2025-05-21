import { BoardCard } from "@/components/board/board-card"
import { NewBoard } from "@/components/board/new-board";

export const Home = () => {
    // return jsx
    return (
        <section className="py-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <h1 className="text-5xl font-bold">Welcome to TaskFlow-ReactJs</h1>
                        <p>TaskFlow-ReactJs is a task management system that allows you to manage your tasks efficiently.</p>
                    </div>
                    <div>
                        <img src="https://startinfinity.s3.us-east-2.amazonaws.com/production/blog/post/5/main/1SvzKctRCi8bwB0QPdOZkBP0pRhsOqZpl0wjs6y0.png" alt="TaskFlow-ReactJs" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>
                <div className="mt-12">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold">My Boards</h2>
                        <NewBoard />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                        <BoardCard />
                        <BoardCard />
                        <BoardCard />
                        <BoardCard />
                    </div>
                </div>
            </div>
        </section>
    )
}
