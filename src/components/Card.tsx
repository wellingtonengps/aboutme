type Props = {
    title: string
}

export default function Card(props: Props) {
    return (
        <div className="h-36  flex flex-col justify-around  min-w-64 bg-blue-950 p-4 text-center rounded-md">
            <h1>{props.title}</h1>
            <div className="flex gap-3 flex-row text-center justify-center">
                <div className="flex justify-center items-center h-10 w-10 bg-green-500">oi</div>
                <div className="flex justify-center items-center h-10 w-10 bg-green-500">oi</div>
                <div className="flex justify-center items-center h-10 w-10 bg-green-500">oi</div>
                <div className="flex justify-center items-center h-10 w-10 bg-green-500">oi</div>
            </div>
        </div>
    )
}