
export default function Card() {
    return (
        <div className="flex flex-col justify-around h-40 min-w-80 bg-blue-600 p-4 text-center rounded-md">
            <h1>Liguagem de programação</h1>
            <div className="flex gap-3 flex-row text-center justify-center">
                <div className="flex justify-center items-center h-10 w-10 bg-green-500">oi</div>
                <div className="flex justify-center items-center h-10 w-10 bg-green-500">oi</div>
                <div className="flex justify-center items-center h-10 w-10 bg-green-500">oi</div>
                <div className="flex justify-center items-center h-10 w-10 bg-green-500">oi</div>
            </div>
        </div>
    )
}