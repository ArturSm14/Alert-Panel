export default function BigCard({ title = "Titulo", number = "32", variant = "green" }) {

    const VARIANTS = {
        green: "bg-green-700",
        orange: "bg-orange-600",
    }

    return <div className={`flex flex-1 flex-col p-4 gap-4 ${VARIANTS[variant]} rounded-lg text-white`}>
        <div className="flex-shrink ">{title}</div>
        <div className="flex-grow flex items-end text-6xl font-bold">{number}</div>
    </div>
}