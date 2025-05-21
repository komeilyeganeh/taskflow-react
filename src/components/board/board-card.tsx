import { Link } from "react-router"

export const BoardCard = () => {
    return (
        <div className="card bg-base-100 shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-base-300 h-32 rounded-t-md"></div>
            <div className="card-body">
                <h3 className="card-title">Board Name</h3>
                <Link to="/board/1" className="btn btn-outline btn-primary">View Board</Link>
            </div>
        </div>
    )
}
