import { Column } from "./column/column"

export const BoardContainer = () => {
    return (
        <section className="flex">
            <Column id="1" />
            <Column id="2" />
            <Column id="3" />

            {/* add column button */}
            <button className="btn btn-info">Add Column</button>
        </section>
    )
}
