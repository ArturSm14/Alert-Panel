export default function InputWithLabel({ label = "Sem label", multiline = false, type = "text" }) {
    return <div className="flex flex-col gap-1">
        <p className="text-white">{label}</p>

        {multiline ?
            <textarea rows={4} className="border-2 border-white rounded-md p-2 outline-none bg-transparent text-white" /> :
            <input
                type={type}
                className="text-white p-2 rounded-md border-white border-2 outline-none bg-transparent"
            />}
    </div>
}